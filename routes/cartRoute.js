const express = require("express");
const router = express.Router();
const authorizedUser = require("../middlewares/authorization");
const cartController = require("../controllers/cartController");

router.use(authorizedUser.getUserIdByVerifyToken);

router.post("", cartController.validCartForm, cartController.createCart);
router.get("", cartController.getCart);
router.patch("", cartController.updateCart);
// router.get("", cartController);

module.exports = router;
