import { Database } from "bun:sqlite";
import { describe, expect, it, beforeEach } from "bun:test";
import { drizzle } from "drizzle-orm/bun-sqlite";
import type { BunSQLiteDatabase } from "drizzle-orm/bun-sqlite";
import { migrate } from "drizzle-orm/bun-sqlite/migrator";

import * as schema from "../src/schema";
import { subscribers, type NewSubscriber } from "../src/schema";

describe("Subscribers Schema", () => {
  let db: BunSQLiteDatabase<typeof schema>;

  beforeEach(() => {
    const sqlite = new Database(":memory:");
    db = drizzle(sqlite, { schema });
    migrate(db, {
      migrationsFolder: `${import.meta.dir}/../migrations`,
    });
  });

  it("should insert a new subscriber", async () => {
    const newSubscriber: NewSubscriber = {
      email: "test@example.com",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await db.insert(subscribers).values(newSubscriber).run();

    const result = await db.select().from(subscribers).all();
    expect(result).toHaveLength(1);
    expect(result[0].email).toBe("test@example.com");
  });

  it("throws an error when inserting a duplicate email", async () => {
    const subscriber: NewSubscriber = {
      email: "test@example.com",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await db.insert(subscribers).values(subscriber).run();

    expect(() => db.insert(subscribers).values(subscriber).run()).toThrow();
  });

  it("throws an error when an invalid email is entered", async () => {
    const subscriber: NewSubscriber = {
      email: "invalid-email",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    expect(() => db.insert(subscribers).values(subscriber).run()).toThrow();
  });
});
