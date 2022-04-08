const jwt = require("jsonwebtoken");

const getUserIdByVerifyToken = async (req, res, next) => {
  const token = req.headers.token;

  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        res.status(400).json({ message: err.message });
      } else {
        req.userId = decoded.userId;
        next();
      }
    });
  } else {
    res.status(403).json({ message: "token is not provided" });
  }
};

module.exports = { getUserIdByVerifyToken };
