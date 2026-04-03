import { config as loadEnv } from "dotenv";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

loadEnv({ path: ".env.local" });
loadEnv();

const connectionString =
  process.env.POSTGRES_PRISMA_URL ?? process.env.DATABASE_URL ?? "";

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export { prisma };
