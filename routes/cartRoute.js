const express = require("express");
const router = express.Router();
const authorizedUser = require("../middlewares/authorizeUser");
const cartController = require("../controllers/cartController");

router.post("", cartController.validCartForm, cartController.createCart);
router.get("", authorizedUser.verifyToken, cartController.getCart);
// router.get("", cartController);

module.exports = router;
