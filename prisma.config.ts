// Prisma CLI does not load Next.js-style .env.local automatically.
import { config as loadEnv } from "dotenv";
import { defineConfig } from "prisma/config";

loadEnv({ path: ".env.local" });
loadEnv();

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "node --import tsx src/seed.ts",
  },
  datasource: {
    url: process.env["POSTGRES_PRISMA_URL"] ?? process.env["DATABASE_URL"],
  },
});
