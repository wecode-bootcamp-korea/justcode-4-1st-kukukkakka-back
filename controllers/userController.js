const userService = require("../services/userService");

const signup = async (req, res) => {
  try {
    const { email, password, username, policy_agreed, gender_id } = req.body;

    if (!email) {
      const error = new Error("KEY ERROR : NO_EMAIL");
      error.statusCode = 400;
      throw error;
    }

    if (!password) {
      const error = new Error("KEY ERROR : NO_PASSWORD");
      error.statusCode = 400;
      throw error;
    }

    if (!username) {
      const error = new Error("KEY ERROR : NO_USERNAME");
      error.statusCode = 400;
      throw error;
    }

    if (!policy_agreed) {
      const error = new Error("KEY ERROR : NO_POLICY_AGREED");
      error.statusCode = 400;
      throw error;
    }

    if (!gender_id) {
      const error = new Error("KEY ERROR : NO_GENDER_ID");
      error.statusCode = 400;
      throw error;
    }

    const createUser = await userService.signup(
      email,
      password,
      username,
      policy_agreed,
      gender_id
    );
    return res.status(201).json({ message: "SIGNUP_SUCCESS" });
  } catch (err) {
    console.log(err);
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      const error = new Error("KEY ERROR");
      error.statusCode = 400;
      throw error;
    }

    const token = await userService.login(email, password);
    return res.status(201).json({
      message: "SUCCESS_LOGIN",
      token,
    });
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};
module.exports = { signup, login };
