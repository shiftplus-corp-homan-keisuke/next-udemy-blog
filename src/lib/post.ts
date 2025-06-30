import { decode } from "punycode";
import { prisma } from "./prisma";

export async function getPosts() {
  return await prisma.post.findMany({
    where: {
      published: true,
    },
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getPost(id: string) {
  return await prisma.post.findUnique({
    where: {
      id: id,
    },
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
  });
}

export async function searchPosts(query: string) {
  console.log(query);

  const decodedQuery = decodeURIComponent(query);
  const normalizedQuery = decodedQuery.replace(/[\s　]+/g, " ").trim();
  const searchQueries = normalizedQuery.split(" ").filter(Boolean);

  const filters = searchQueries.map((q) => {
    return {
      OR: [{ title: { contains: q } }, { content: { contains: q } }],
    };
  });

  return await prisma.post.findMany({
    where: {
      AND: filters,
    },
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
  });
}
