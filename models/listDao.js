const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const postKeyWord = async (keyword) => {
  return await prisma.$queryRaw`
    INSERT INTO keywords(keyword) VALUES(${keyword}) `;
};

module.exports = { postKeyWord };
