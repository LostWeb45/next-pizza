import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  let prismaGlobal: PrismaClient | undefined;
}

export const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

if (
  typeof process.env.NODE_ENV === "undefined" ||
  process.env.NODE_ENV !== "production"
) {
  globalThis.prismaGlobal = prisma;
}
