const userService = require("../services/userService");
// const userInputError = require("./customError");
class userInputError extends Error {
  constructor(key) {
    console.log("여기까지 오긴 하냐?", key);
    super(key);
    const ErrorMapping = {
      'email': {
        message: "KEY ERROR : email",
        statusCode: 400,
      },
      'password': {
        message: "KEY ERROR : password",
        statusCode: 400,
      },
      'username': {
        message: "KEY ERROR : username",
        statusCode: 400,
      },
      'genderId': {
        message: "KEY ERROR : genderId",
        statusCode: 400,
      },
      'policyAgreed': {
        message: "KEY ERROR : policyAgreed",
        statusCode: 400,
      },
    };
    // console.log("여기까지도 설마 오냐?", ErrorMapping[key]);
    userInputError.statusCode = ErrorMapping[key].statusCode;
    // console.log("너는 어떻게 나오고 있니 ", userInputError.statusCode);
    userInputError.message = ErrorMapping[key].message;
    // console.log("너는 어떻게 나오고 있니2 ", userInputError.message);
    throw userInputError
  }
}

const signup = async (req, res) => {
  try {
    const { email, password, username, policyAgreed, genderId } = req.body;

    //for 문을 이용하여 정리
    const REQUIRED_KEYS = { email, password, username, policyAgreed, genderId };

    // for (const key in REQUIRED_KEYS) {
    //   if (!REQUIRED_KEYS[key]) {
    //     const error = new Error(`KEY_ERROR : ${key}`);
    //     error.statusCode = 400;
    //     throw error;
    //   }
    // }

    for (const key in REQUIRED_KEYS) {
      if (!REQUIRED_KEYS[key]) {
        throw new userInputError(key);
      }
    }

    // if (!email) {
    //   const error = new Error("KEY ERROR : NO_EMAIL");
    //   error.statusCode = 400;
    //   throw error;
    // }

    // if (!password) {
    //   const error = new Error("KEY ERROR : NO_PASSWORD");
    //   error.statusCode = 400;
    //   throw error;
    // }

    // if (!username) {
    //   const error = new Error("KEY ERROR : NO_USERNAME");
    //   error.statusCode = 400;
    //   throw error;
    // }

    // if (!policyAgreed) {
    //   const error = new Error("KEY ERROR : NO_POLICY_AGREED");
    //   error.statusCode = 400;
    //   throw error;
    // }

    // if (!genderId) {
    //   const error = new Error("KEY ERROR : NO_GENDER_ID");
    //   error.statusCode = 400;
    //   throw error;
    // }

    const createUser = await userService.signup(
      email,
      password,
      username,
      policyAgreed,
      genderId
    );

    return res.status(201).json({ message: "SIGNUP_SUCCESS" });
  } catch (err) {
    console.log(err.status);
    console.log(err.message);
    return res.status(err.statusCode || 500).json({ message: err.message });
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

const duplicateCheck = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      const error = new Error("KEY_ERROR");
      error.status = 400;
      throw error;
    }

    const checkResult = await userService.duplicateCheck(email);
    return res.status(201).json({
      message: "NEW_USER",
    });
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const getUserName = async (req, res) => {
  try {
    const userId = req.userId;
    const userName = await userService.getUserName(userId);
    return res.status(201).json({ userName });
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = { signup, login, duplicateCheck, getUserName };
