# Request Protection

The contact endpoint enforces:

- 5 requests per client IP in a fixed 10-minute window.
- A bounded 8 KB JSON body, field length validation, same-origin checks when an `Origin` header is present, HTML escaping, and a honeypot field.
- `429 Too Many Requests` responses with `Retry-After` and rate-limit headers.

## Distributed rate limits

Set these environment variables in Vercel and local development to share limits across serverless instances:

```text
UPSTASH_REDIS_REST_URL
UPSTASH_REDIS_REST_TOKEN
```

When these are absent, the app uses a bounded in-memory fallback for local development and single-process deployments. That fallback is not a distributed production limit. If the configured Upstash service is unavailable, the contact endpoint fails closed with `503` rather than sending an unprotected email.

## Volumetric DDoS protection

Application rate limits protect the contact handler; they cannot absorb volumetric attacks before traffic reaches the app. Keep the site behind its CDN and enable the hosting provider's WAF/firewall and managed DDoS protections. On Vercel, add an edge rule/challenge for abusive traffic and a rate limit for `/api/contact`; those controls must run before the function is invoked.
