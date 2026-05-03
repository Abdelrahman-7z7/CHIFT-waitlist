import { drizzle } from "drizzle-orm/d1";

import * as schema from "./schema";

export * from "./schema";
export * from "./queries";

export function createDb(binding: D1Database) {
  return drizzle(binding, { schema });
}

export type DrizzleDb = ReturnType<typeof createDb>;
