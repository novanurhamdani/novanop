import { createHash } from "node:crypto";

interface RateLimitOptions {
  key: string;
  limit: number;
  windowMs: number;
}

export interface RateLimitResult {
  allowed: boolean;
  limit: number;
  remaining: number;
  resetAt: number;
  retryAfterSeconds: number;
  unavailable?: boolean;
}

interface MemoryWindow {
  count: number;
  resetAt: number;
}

const memoryWindows = new Map<string, MemoryWindow>();
const MAX_MEMORY_WINDOWS = 10_000;
let lastMemoryCleanup = 0;
let warnedAboutMemoryFallback = false;

const getClientIp = (request: Request) => {
  const headers = request.headers;
  const realIp = headers.get("x-real-ip")?.trim();
  if (realIp) return realIp;

  const forwardedFor = headers.get("x-forwarded-for");
  const forwardedIp = forwardedFor?.split(",").at(-1)?.trim();
  return forwardedIp || "unknown";
};

const getStorageKey = (request: Request, scope: string) => {
  const digest = createHash("sha256")
    .update(getClientIp(request))
    .digest("hex")
    .slice(0, 32);

  return `novanop:ratelimit:${scope}:${digest}`;
};

const memoryRateLimit = (
  key: string,
  limit: number,
  windowMs: number,
): RateLimitResult => {
  const now = Date.now();
  if (now - lastMemoryCleanup > 60_000) {
    memoryWindows.forEach((window, windowKey) => {
      if (window.resetAt <= now) memoryWindows.delete(windowKey);
    });
    lastMemoryCleanup = now;
  }

  const current = memoryWindows.get(key);

  if (!current || current.resetAt <= now) {
    if (!current && memoryWindows.size >= MAX_MEMORY_WINDOWS) {
      return {
        allowed: false,
        limit,
        remaining: 0,
        resetAt: now + 60_000,
        retryAfterSeconds: 60,
      };
    }

    const resetAt = now + windowMs;
    memoryWindows.set(key, { count: 1, resetAt });
    return {
      allowed: true,
      limit,
      remaining: limit - 1,
      resetAt,
      retryAfterSeconds: Math.ceil(windowMs / 1000),
    };
  }

  if (current.count >= limit) {
    return {
      allowed: false,
      limit,
      remaining: 0,
      resetAt: current.resetAt,
      retryAfterSeconds: Math.max(1, Math.ceil((current.resetAt - now) / 1000)),
    };
  }

  current.count += 1;
  return {
    allowed: true,
    limit,
    remaining: limit - current.count,
    resetAt: current.resetAt,
    retryAfterSeconds: Math.max(1, Math.ceil((current.resetAt - now) / 1000)),
  };
};

const upstashRateLimit = async (
  key: string,
  limit: number,
  windowMs: number,
): Promise<RateLimitResult> => {
  const baseUrl = process.env.UPSTASH_REDIS_REST_URL?.replace(/\/+$/, "");
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!baseUrl || !token) throw new Error("Upstash Redis is not configured");

  const script = `
    local count = redis.call("INCR", KEYS[1])
    if count == 1 then
      redis.call("PEXPIRE", KEYS[1], ARGV[1])
    end
    return { count, redis.call("PTTL", KEYS[1]) }
  `;
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(["EVAL", script, 1, key, windowMs]),
    cache: "no-store",
    signal: AbortSignal.timeout(2000),
  });

  if (!response.ok) {
    throw new Error(`Upstash rate limit request failed: ${response.status}`);
  }

  const payload = (await response.json()) as {
    result?: [number, number];
    error?: string;
  };
  if (payload.error || !Array.isArray(payload.result)) {
    throw new Error(payload.error ?? "Invalid Upstash rate limit response");
  }

  const [count, ttl] = payload.result;
  if (!Number.isFinite(count) || !Number.isFinite(ttl) || ttl < 0) {
    throw new Error("Invalid Upstash rate limit result");
  }

  const now = Date.now();
  return {
    allowed: count <= limit,
    limit,
    remaining: Math.max(0, limit - count),
    resetAt: now + ttl,
    retryAfterSeconds: Math.max(1, Math.ceil(ttl / 1000)),
  };
};

export const checkRateLimit = async (
  request: Request,
  { key, limit, windowMs }: RateLimitOptions,
): Promise<RateLimitResult> => {
  const storageKey = getStorageKey(request, key);
  const hasUpstashConfig =
    Boolean(process.env.UPSTASH_REDIS_REST_URL) &&
    Boolean(process.env.UPSTASH_REDIS_REST_TOKEN);

  if (hasUpstashConfig) {
    try {
      return await upstashRateLimit(storageKey, limit, windowMs);
    } catch (error) {
      console.error("Distributed rate limiter unavailable", error);
      return {
        allowed: false,
        limit,
        remaining: 0,
        resetAt: Date.now() + windowMs,
        retryAfterSeconds: 60,
        unavailable: true,
      };
    }
  }

  if (process.env.NODE_ENV === "production" && !warnedAboutMemoryFallback) {
    warnedAboutMemoryFallback = true;
    console.warn(
      "Upstash is not configured; rate limiting is per process. Configure UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN for distributed protection.",
    );
  }

  return memoryRateLimit(storageKey, limit, windowMs);
};
