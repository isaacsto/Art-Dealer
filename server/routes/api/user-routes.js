const router = require("express").Router();
const {
  getUser,
  createUser,
  loginUser,
  showPurchaseHistory,
} = require("../../controllers/userController");

const { authMiddleware } = require("../../utils/auth");

router.route("/").post(createUser);
router.route("/login").post(loginUser);
router.route("/me").get(authMiddleware, getUser);
router.route("/purhcase-history").get(showPurchaseHistory);

module.exports = router;
