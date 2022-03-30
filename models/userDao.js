const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const signup = () => {
  try {
      return await prisma.$queryRaw`
        SELECT FROM 
      `
  } catch (err) {}
};

module.exports = { signup };
