const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const checkDuplicateEmail = async (email) => {
  return await prisma.$queryRaw`
  SELECT email FROM users WHERE email = ${email}
  `;
};

const createUser = async (
  email,
  encryptedPassword,
  username,
  policy_agreed,
  gender_id
) => {
  return await prisma.$queryRaw`
    INSERT INTO users (email, password, username, policy_agreed, gender_id) VALUES (${email}, ${encryptedPassword}, ${username}, ${policy_agreed}, ${gender_id})
    `;
};

const checkUser = async (email, password) => {
  return await prisma.$queryRaw`
    SELECT email, password from users where email = ${email}
  `;
};

module.exports = { checkDuplicateEmail, createUser, checkUser };
