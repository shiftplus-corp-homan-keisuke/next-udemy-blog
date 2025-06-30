import { prisma } from "../src/lib/prisma";
import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcryptjs";

async function main() {
  await prisma.post.deleteMany();
  await prisma.user.deleteMany();
  const hashedPassword = await bcrypt.hash("password123", 12);
  const dummyImages = [
    "https://picsum.photos/seed/post1/600/400",
    "https://picsum.photos/seed/post2/600/400",
  ];

  const user = await prisma.user.create({
    data: {
      email: "homan@example.com",
      name: "homan",
      password: hashedPassword,
      posts: {
        create: [
          {
            title: "First Post",
            content: "This is the content of the first post.",
            topImage: dummyImages[0],
            published: true,
          },
          {
            title: "Second Post",
            content: "This is the content of the second post.",
            topImage: dummyImages[1],
            published: true,
          },
        ],
      },
    },
  });

  console.log({ user });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
