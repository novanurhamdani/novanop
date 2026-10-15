import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { checkRateLimit } from "../../../lib/security/rate-limit";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LIMITS = { name: 100, email: 254, message: 5000 };
const MAX_BODY_BYTES = 8192;
const CONTACT_RATE_LIMIT = { key: "contact", limit: 5, windowMs: 10 * 60 * 1000 };

class BodyTooLargeError extends Error {}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const readJsonBody = async (request: NextRequest) => {
  if (Number(request.headers.get("content-length")) > MAX_BODY_BYTES) {
    throw new BodyTooLargeError();
  }

  const reader = request.body?.getReader();
  if (!reader) throw new SyntaxError("Request body is missing");

  const chunks: Uint8Array[] = [];
  let byteLength = 0;

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    byteLength += value.byteLength;
    if (byteLength > MAX_BODY_BYTES) {
      await reader.cancel();
      throw new BodyTooLargeError();
    }
    chunks.push(value);
  }

  const body = new Uint8Array(byteLength);
  let offset = 0;
  chunks.forEach((chunk) => {
    body.set(chunk, offset);
    offset += chunk.byteLength;
  });

  return JSON.parse(new TextDecoder().decode(body)) as unknown;
};

export async function POST(request: NextRequest) {
  const rateLimit = await checkRateLimit(request, CONTACT_RATE_LIMIT);
  const rateLimitHeaders = {
    "X-RateLimit-Limit": String(rateLimit.limit),
    "X-RateLimit-Remaining": String(rateLimit.remaining),
    "X-RateLimit-Reset": String(Math.ceil(rateLimit.resetAt / 1000)),
  };

  if (rateLimit.unavailable) {
    return NextResponse.json(
      { error: "Contact form is temporarily unavailable" },
      {
        status: 503,
        headers: {
          ...rateLimitHeaders,
          "Retry-After": String(rateLimit.retryAfterSeconds),
        },
      },
    );
  }

  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many messages. Please try again later." },
      {
        status: 429,
        headers: {
          ...rateLimitHeaders,
          "Retry-After": String(rateLimit.retryAfterSeconds),
        },
      },
    );
  }

  const origin = request.headers.get("origin");
  if (origin) {
    try {
      if (new URL(origin).origin !== new URL(request.url).origin) {
        return NextResponse.json(
          { error: "Invalid request origin" },
          { status: 403, headers: rateLimitHeaders },
        );
      }
    } catch {
      return NextResponse.json(
        { error: "Invalid request origin" },
        { status: 403, headers: rateLimitHeaders },
      );
    }
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json(
      { error: "Expected a JSON request" },
      { status: 415, headers: rateLimitHeaders },
    );
  }

  let body: unknown;
  try {
    body = await readJsonBody(request);
  } catch (error) {
    if (error instanceof BodyTooLargeError) {
      return NextResponse.json(
        { error: "Request body is too large" },
        { status: 413, headers: rateLimitHeaders },
      );
    }
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400, headers: rateLimitHeaders },
    );
  }

  const {
    name,
    email,
    message,
    website,
  } = (body ?? {}) as Record<string, unknown>;

  if (website !== undefined && (typeof website !== "string" || website.trim())) {
    // Silently accept bot submissions without sending email.
    return NextResponse.json({ success: true }, { status: 200 });
  }

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !message.trim() ||
    !EMAIL_RE.test(email) ||
    name.length > LIMITS.name ||
    email.length > LIMITS.email ||
    message.length > LIMITS.message
  ) {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400, headers: rateLimitHeaders },
    );
  }

  if (!process.env.EMAIL_PASSWORD) {
    console.error("Contact form called without EMAIL_PASSWORD configured");
    return NextResponse.json(
      { error: "Contact form is temporarily unavailable" },
      { status: 503, headers: rateLimitHeaders },
    );
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message);
  const owner = "nova.nurhamdani@gmail.com";

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: owner,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: owner,
      replyTo: email,
      to: owner,
      subject: `Portfolio Contact: ${name.slice(0, LIMITS.name)}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
<div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
  <h2 style="color: #1a4bff;">New Contact from Portfolio</h2>
  <p><strong>Name:</strong> ${safeName}</p>
  <p><strong>Email:</strong> ${safeEmail}</p>
  <h3>Message:</h3>
  <p style="background-color: #f5f5f5; padding: 15px;">${safeMessage}</p>
</div>
      `,
    });

    return NextResponse.json(
      { success: true },
      { status: 200, headers: rateLimitHeaders },
    );
  } catch (error) {
    console.error("Error sending contact email:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500, headers: rateLimitHeaders },
    );
  }
}
