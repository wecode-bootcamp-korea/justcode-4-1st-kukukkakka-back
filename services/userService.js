const userDao = require("../models/userDao");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (email, password, username, policy_agreed, gender_id) => {
  if (password.length < 8) {
    const error = new Error("PASSWORD_TOO_SHORT");
    error.statusCode = 400;
    throw error;
  }
  const user = await userDao.checkDuplicateEmail(email);
  if (user.length !== 0) {
    const error = new Error("EXSITING_USER");
    error.statusCode = 400;
    throw error;
  }

  if (policy_agreed !== true) {
    const error = new Error("POLICY_IS_NOT_AGREED");
    error.statusCode = 400;
    throw error;
  }
  const encryptedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync());
  const createUser = await userDao.createUser(
    email,
    encryptedPassword,
    username,
    policy_agreed,
    gender_id
  );
  return createUser;
};

module.exports = { signup };
