import { MiddlewareHandler } from "hono";
import { cors } from "hono/cors";
import { secureHeaders } from "hono/secure-headers";

export const securityMiddlewares: MiddlewareHandler[] = [
  secureHeaders(),
  (c, next) => {
    const origin =
      c.env.ENVIRONMENT === "production"
        ? "https://chift.app" // Placeholder, update with real prod domain
        : ["https://staging.chift-web.pages.dev", "http://localhost:3000"];

    return cors({
      origin,
      allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowHeaders: ["Content-Type", "Authorization", "X-Internal-Secret"],
      maxAge: 86400,
    })(c, next);
  },
];
