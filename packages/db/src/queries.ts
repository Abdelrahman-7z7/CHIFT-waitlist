import { eq } from "drizzle-orm";
import { DrizzleD1Database } from "drizzle-orm/d1";

import * as schema from "./schema";

export const getSubscriberByEmail = async (
  db: DrizzleD1Database<typeof schema>,
  email: string,
) => {
  return await db.query.subscribers.findFirst({
    where: eq(schema.subscribers.email, email),
  });
};

export const createSubscriber = async (
  db: DrizzleD1Database<typeof schema>,
  data: typeof schema.subscribers.$inferInsert,
) => {
  return await db.insert(schema.subscribers).values(data).returning();
};
