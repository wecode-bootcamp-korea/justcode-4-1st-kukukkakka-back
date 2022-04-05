const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const token = req.headers.token;

  console.log(token);

  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: err.message });
      } else {
        const { id } = decoded;
        req.userId = id;
        next();
      }
    });
  } else {
    res.status(403).json({ message: "No token provided" });
  }
};

module.exports = { verifyToken };
