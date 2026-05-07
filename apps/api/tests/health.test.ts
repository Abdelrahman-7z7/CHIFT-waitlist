/* eslint-disable @typescript-eslint/no-explicit-any */
import { expect, test, describe } from "bun:test";

import app from "../src/index";

import { mockEnv } from "./setup";

describe("Health Check", () => {
  test("GET /api/health returns 200", async () => {
    const res = await app.request(
      "/api/health",
      {
        headers: {
          "x-internal-secret": "test-secret",
        },
      },
      mockEnv as unknown as Record<string, unknown>,
    );

    expect(res.status).toBe(200);
    const body = (await res.json()) as any;
    expect(body.status).toBe("ok");
    expect(body.db).toBe("connected");
  });
});
