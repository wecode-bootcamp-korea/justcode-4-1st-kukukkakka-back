const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

const userController = require("../controllers/userController");

router.post("/signup", userController.signup);

module.exports = router;
