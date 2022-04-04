const userService = require("../services/userService");

const signup = async (req, res) => {
  try {
    const { email, password, username, policy_agreed, gender_id } = req.body;

    if (!email || !password || !username || !gender_id) {
      const error = new Error("KEY ERROR");
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

module.exports = { signup };
