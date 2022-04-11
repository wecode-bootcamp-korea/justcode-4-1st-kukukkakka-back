const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authorizedUser = require("../middlewares/authorization");

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.post("/signup/duplicate", userController.duplicateCheck);
router.get(
  "/name",
  authorizedUser.getUserIdByVerifyToken,
  userController.getUserName
);

module.exports = router;
