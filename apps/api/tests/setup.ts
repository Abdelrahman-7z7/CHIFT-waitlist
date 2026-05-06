import * as schema from "@repo/db";
import { Database } from "bun:sqlite";
import { mock } from "bun:test";
import { drizzle } from "drizzle-orm/bun-sqlite";
import { migrate } from "drizzle-orm/bun-sqlite/migrator";

// 1. Initialize In-memory SQLite
const sqlite = new Database(":memory:");
export const testDb = drizzle(sqlite, { schema });

// 2. Run Migrations
migrate(testDb, {
  migrationsFolder: "../../packages/db/migrations",
});

// 3. Mock the Database and Resend modules using absolute paths
const dbPath = Bun.resolveSync("../src/lib/db", import.meta.dir);
const resendPath = Bun.resolveSync("../src/lib/resend", import.meta.dir);

mock.module(dbPath, () => ({
  getDb: () => testDb,
}));

mock.module(resendPath, () => ({
  getResend: () => ({
    emails: {
      send: mock(() =>
        Promise.resolve({ data: { id: "test-email-id" }, error: null }),
      ),
    },
  }),
}));

export const mockEnv = {
  ENVIRONMENT: "dev",
  FRONTEND_URL: "http://localhost:3000",
  EMAIL_FROM: "test@example.com",
  DB: {} as unknown as D1Database,
  INTERNAL_SECRET: "test-secret",
};
