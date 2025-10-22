import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // * data have been created
  // const result = await prisma.post.create({
  //   data: {
  //     title: "this is my seconde post",
  //     content: "this is my seconde content post for learning",
  //     authorName: "awolad bhai",
  //   },
  // });
  // console.log(result)
  const getAllPostFromDB = await prisma.post.findMany();
  // console.log(getAllPostFromDB);
  // * find first means find the first post
  const findFirst = await prisma.post.findFirst({
    where: {
      published: true,
    },
  });
  // console.log(findFirst);
  const findUnique = await prisma.post.findUniqueOrThrow({
    where: {
      // published:false
      id: 2,
    },
  });
  // console.log(findUnique);
  const findUniquess = await prisma.post.findUnique({
    where: {
      id: 1,
    },
  });
  // console.log(findUniquess);

  // const createManyContent = await prisma.post.createMany({
  //   data: [
  //     {
  //       title: "this is my third post",
  //       content: "this is my third content post for learning",
  //     },
  //     {
  //       title: "this is my fourth post",
  //       content: "this is my fourth content post for learning",
  //     },
  //   ],
  // });
  // console.log(createManyContent)
};
main();
