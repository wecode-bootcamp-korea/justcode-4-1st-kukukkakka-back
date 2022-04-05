const userDao = require("../models/userDao");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (email, password, username, policy_agreed, gender_id) => {
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

  if (policy_agreed !== true) {
    const error = new Error("POLICY_IS_NOT_AGREED");
    error.statusCode = 400;
    throw error;
  }
  const encryptedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync());
  console.log(encryptedPassword);
  const createUser = await userDao.createUser(
    email,
    encryptedPassword,
    username,
    policy_agreed,
    gender_id
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
  console.log(isCorrect);

  if (!isCorrect) {
    const error = new Error("INVALID_USER");
    error.statusCode = 400;
    throw error;
  }

  const token = jwt.sign({ id: user[0].id }, process.env.SECRET_KEY);
  return token;
};

module.exports = { signup, login };
