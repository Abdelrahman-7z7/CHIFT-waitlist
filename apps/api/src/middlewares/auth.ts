import { createMiddleware } from "hono/factory";
import { jwtVerify, createRemoteJWKSet } from "jose";

interface Env {
  POLICY_AUD: string;
  CF_ACCESS_DOMAIN: string;
  ENVIRONMENT: string;
  INTERNAL_SECRET: string;
}

export const accessAuthMiddleware = createMiddleware<{ Bindings: Env }>(
  async (c, next) => {
    const policy = c.env.POLICY_AUD;
    const domain = c.env.CF_ACCESS_DOMAIN;

    if (c.env.ENVIRONMENT === "dev") {
      return await next();
    }

    // Allow internal calls from our Web app to bypass Access
    const internalSecret = c.req.header("x-internal-secret");
    if (internalSecret && internalSecret === c.env.INTERNAL_SECRET) {
      return await next();
    }

    if (!policy || !domain) {
      console.error("Missing authentication configuration in environment");
      return c.json({ error: "Server configuration error" }, 500);
    }

    // Get the JWT from the request headers
    const token = c.req.header("cf-access-jwt-assertion");

    if (!token) {
      return c.json({ error: "Missing required Cloudflare Access JWT" }, 401);
    }

    try {
      // Create JWKS from the Cloudflare Access domain
      const JWKS = createRemoteJWKSet(
        new URL(`${domain}/cdn-cgi/access/certs`),
      );

      // Verify the JWT against the audience and issuer
      await jwtVerify(token, JWKS, {
        issuer: domain,
        audience: policy,
      });

      // Token is valid, proceed to the next handler
      await next();
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      return c.json({ error: `Authentication failed: ${message}` }, 403);
    }
  },
);
