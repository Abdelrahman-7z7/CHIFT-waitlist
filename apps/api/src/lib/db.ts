import * as schema from "@repo/db";
import { drizzle } from "drizzle-orm/d1";

export const getDb = (d1: D1Database) => {
  return drizzle(d1, { schema });
};
