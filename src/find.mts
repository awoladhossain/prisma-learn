import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const getAllFromDB = await prisma.post.findMany();
  console.log(getAllFromDB);
  const findFirst = await prisma.post.findFirst({
    where: {
      id: 2,
    },
  });
  console.log({ findFirst });
};
