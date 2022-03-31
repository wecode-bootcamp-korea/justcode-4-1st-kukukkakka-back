const userDao = require("../models/userDao");

const checkEmailValid = async () => {
  try {
    prisma;
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
};

module.exports = { signup };
