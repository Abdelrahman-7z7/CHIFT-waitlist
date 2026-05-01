import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/schema.ts", //we are telling drizzle to look at this file for the schema.
  out: "./migrations", // where to store the migrations.
  driver: "d1", // the driver we are using.
});
