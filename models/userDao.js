const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const checkDuplicateEmail = async (email) => {
  const data = await prisma.$queryRaw`
  SELECT email FROM users WHERE email = ${email}
  `;
  return data;
};

const createUser = async (
  email,
  encryptedPassword,
  username,
  policyAgreed,
  genderId
) => {
  return await prisma.$queryRaw`
    INSERT INTO users (email, password, username, policy_agreed, gender_id) VALUES (${email}, ${encryptedPassword}, ${username}, ${policyAgreed}, ${genderId})
    `;
};

const checkUser = async (email, password) => {
  return await prisma.$queryRaw`
    SELECT id, email, password from users where email = ${email}
  `;
};

module.exports = { checkDuplicateEmail, createUser, checkUser };
