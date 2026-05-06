/* eslint-disable @typescript-eslint/no-explicit-any */
import * as schema from "@repo/db";
import { expect, test, describe, beforeEach } from "bun:test";
import { sql } from "drizzle-orm";

import app from "../src/index";

import { mockEnv, testDb } from "./setup";

describe("Subscribers API", () => {
  beforeEach(async () => {
    // Clean up DB before each test
    await testDb.run(sql`DELETE FROM subscribers`);
  });

  test("POST /api/v1/subscribers/signup - success", async () => {
    const res = await app.request(
      "/api/v1/subscribers/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "test@example.com",
        }),
      },
      mockEnv as unknown as Record<string, unknown>,
    );

    expect(res.status).toBe(200);
    const body = (await res.json()) as any;
    expect(body.success).toBe(true);
    expect(body.message).toBe("Verification email sent!");

    // Verify DB entry
    const sub = await testDb.query.subscribers.findFirst();
    expect(sub?.email).toBe("test@example.com");
    expect(sub?.confirmationToken).not.toBeNull();
  });

  test("POST /api/v1/subscribers/signup - validation error", async () => {
    const res = await app.request(
      "/api/v1/subscribers/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "invalid-email",
        }),
      },
      mockEnv as unknown as Record<string, unknown>,
    );

    expect(res.status).toBe(400);
    const body = (await res.json()) as any;
    expect(body.success).toBe(false);
  });

  test("GET /api/v1/subscribers/verify - success", async () => {
    // 1. Create a subscriber first
    const token = "test-token";
    await testDb.insert(schema.subscribers).values({
      email: "verify@example.com",
      confirmationToken: token,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as unknown as schema.NewSubscriber);

    // 2. Verify
    const res = await app.request(
      `/api/v1/subscribers/verify?token=${token}`,
      {
        method: "GET",
      },
      mockEnv as unknown as Record<string, unknown>,
    );

    expect(res.status).toBe(200);
    const body = (await res.json()) as any;
    expect(body.success).toBe(true);
    expect(body.message).toBe("Email verified successfully!");

    // 3. Check DB
    const sub = await testDb.query.subscribers.findFirst();
    expect(sub?.emailVerified).not.toBeNull();
    expect(sub?.confirmationToken).toBeNull();
  });

  test("GET /api/v1/subscribers/verify - invalid token", async () => {
    const res = await app.request(
      "/api/v1/subscribers/verify?token=wrong",
      {
        method: "GET",
      },
      mockEnv as unknown as Record<string, unknown>,
    );

    expect(res.status).toBe(400);
    const body = (await res.json()) as any;
    expect(body.success).toBe(false);
    expect(body.error).toBe("Invalid or expired token");
  });
});
