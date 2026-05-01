import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/schema.ts", //we are telling drizzle to look at this file for the schema.
  out: "./migrations", // where to store the migrations.
  dialect: "sqlite", // the dialect of sqlite we are using.
});
