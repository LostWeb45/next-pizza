import { prisma } from "./prisma-client";

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "User",
        email: "s2iJL@example.com",
        password: hashSync("123456", 10),
        verfied: new Date(),
        role: "USER",
      },
      {
        fullName: "Admin",
        email: "admin@example.com",
        password: hashSync("123456", 10),
        verfied: new Date(),
        role: "ADMIN",
      },
    ],
  });
}
async function down() {}
async function main() {
  try {
    await down();
    await up();
  } catch (error) {
    console.error(error);
  }
}
