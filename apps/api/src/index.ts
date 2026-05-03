import { sentry } from "@hono/sentry";
import { swaggerUI } from "@hono/swagger-ui";
import { OpenAPIHono } from "@hono/zod-openapi";
import { sql } from "drizzle-orm";
import rateLimiter from "hono-rate-limit";

import { getDb } from "./lib/db";
import { getResend } from "./lib/resend";
import { accessAuthMiddleware } from "./middlewares/auth";
import { errorHandler, notFoundHandler } from "./middlewares/error";
import { securityMiddlewares } from "./middlewares/security";
import subscribersV1 from "./routes/v1/subscribers";

type Bindings = {
  ENVIRONMENT: string;
  DB: D1Database;
  SENTRY_DSN?: string;
  RESEND_API_KEY?: string;
};

type Variables = {
  db: ReturnType<typeof getDb>;
  resend: ReturnType<typeof getResend>;
};

const app = new OpenAPIHono<{ Bindings: Bindings; Variables: Variables }>();

// 0. Database & Services Injection
app.use("*", async (c, next) => {
  c.set("db", getDb(c.env.DB));

  if (c.env.RESEND_API_KEY) {
    c.set("resend", getResend(c.env.RESEND_API_KEY));
  }

  await next();
});

// Documentation
app.doc("/api/doc.json", {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "CHIFT Waitlist API",
  },
});

app.get("/api/docs", swaggerUI({ url: "/api/doc.json" }));

// 1. Sentry (Catch early errors)
app.use("*", (c, next) => {
  if (c.env.SENTRY_DSN) {
    return sentry({ dsn: c.env.SENTRY_DSN })(c, next);
  }
  return next();
});

// 2. Global Security Headers & CORS
app.use("*", ...securityMiddlewares);

// 3. Global Rate Limiter (Basic protection)
app.use(
  "*",
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 100, // Limit each IP to 100 requests per windowMs
  }),
);

// 4. Request ID for Traceability
app.use("*", async (c, next) => {
  const requestId = crypto.randomUUID();
  c.header("X-Request-ID", requestId);
  await next();
});

// Routes
app.use(accessAuthMiddleware).get("/api/health", async (c) => {
  const db = c.get("db");
  let dbStatus = "connected";

  try {
    // Simple query to verify DB connection
    await db.run(sql`SELECT 1`);
  } catch (error) {
    dbStatus = "disconnected";
    console.error("Health check DB error:", error);
  }

  return c.json({
    status: "ok",
    db: dbStatus,
    environment: c.env.ENVIRONMENT,
    timestamp: new Date().toISOString(),
  });
});

app.route("/api/v1/subscribers", subscribersV1);

// Error Handling
app.onError(errorHandler);
app.notFound(notFoundHandler);

export default app;
