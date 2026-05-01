import { Hono } from "hono";
import { cors } from "hono/cors";

import { accessAuthMiddleware } from "./middlewares/auth";

const app = new Hono();

app.use(
  "*",
  cors({
    origin: ["https://staging.chift-web.pages.dev", "http://localhost:3000"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization", "X-Internal-Secret"],
  }),
);

app.use(accessAuthMiddleware).get("/api/health", (c) => {
  return c.json({ status: "ok" });
});

export default app;
