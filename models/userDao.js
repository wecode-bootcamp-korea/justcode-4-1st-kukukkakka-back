const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const checkUserByEmail = async (email) => {
  try {
    return await prisma.$queryRaw`
      SELECT email from users where email=${email}
    `;
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
};

module.exports = { checkUserByEmail };
