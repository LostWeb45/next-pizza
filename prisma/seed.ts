import { hashSync } from "bcrypt";
import { prisma } from "./prisma-client";

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "User",
        email: "s2iJL@example.com",
        password: hashSync("123456", 10),
        verified: new Date(),
        role: "USER",
      },
      {
        fullName: "Admin",
        email: "admin@example.com",
        password: hashSync("123456", 10),
        verified: new Date(),
        role: "ADMIN",
      },
    ],
  });
}
async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" CASCADE;`;
}
async function main() {
  try {
    await down();
    await up();
  } catch (error) {
    console.error(error);
  }
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
