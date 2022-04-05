const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const authorizedUser = require("../middlewares/authorizeUser");
const cartController = require("../controllers/cartController");

router.post("", cartController.validCartForm, cartController.createCart);
router.get("", authorizedUser.verifyToken, cartController.getCart);
// router.get("", cartController);
=======
const productController = require("../controllers/productController");

const userController = require("../controllers/userController");

router.post("/signup", userController.signup);
>>>>>>> develop

module.exports = router;
