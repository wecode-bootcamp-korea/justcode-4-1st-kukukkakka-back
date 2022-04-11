const userDao = require("../models/userDao");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (email, password, username, policyAgreed, genderId) => {
  const user = await userDao.checkDuplicateEmail(email);
  if (user.length !== 0) {
    const error = new Error("EXSITING_USER");
    error.statusCode = 400;
    throw error;
  }

  let regEmail =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
  let regPassword = /(?=.*\d)(?=.*[a-zA-ZS]).{8,20}/;

  if (regEmail.test(email) === false) {
    const error = new Error("EMAILREG_NOT_MATCHED");
    error.statusCode = 400;
    throw error;
  }
  if (regPassword.test(password) === false) {
    const error = new Error("PASSWORDREG_NOT_MATCHED");
    error.statusCode = 400;
    throw error;
  }

  if (policyAgreed !== true) {
    const error = new Error("POLICY_IS_NOT_AGREED");
    error.statusCode = 400;
    throw error;
  }
  const encryptedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync());
  const createUser = await userDao.createUser(
    email,
    encryptedPassword,
    username,
    policyAgreed,
    genderId
  );
  return createUser;
};

const login = async (email, password) => {
  const user = await userDao.checkUser(email, password);
  if (user.length === 0) {
    const error = new Error("INVALID_USER");
    error.statusCode = 400;
    throw error;
  }
  const isCorrect = bcrypt.compareSync(password, user[0].password);
  if (!isCorrect) {
    const error = new Error("INVALID_USER");
    error.statusCode = 400;
    throw error;
  }
  const token = jwt.sign({ id: user[0].id }, process.env.SECRET_KEY);

  return token;
};

const duplicateCheck = async (email) => {
  const userCheck = await userDao.checkDuplicateEmail(email);
  if (userCheck.length !== 0) {
    const error = new Error("EXSITING_USER");
    error.statusCode = 400;
    throw error;
  }
  return userCheck;
};

const getUserName = async (userId) => {
  return await userDao.getUserName(userId);
};

module.exports = { signup, login, duplicateCheck, getUserName };
