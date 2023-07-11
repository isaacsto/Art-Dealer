const router = require("express").Router();
const {
  createOrder,
  getOrder,
  getUserOrders,
} = require("../../controllers/orderController");

const { authMiddleware } = require("../../utils/auth");

// Create a new order
router.route("/").post(authMiddleware, createOrder);

// Get a specific order
router.route("/:orderId").get(authMiddleware, getOrder);

// Get all orders of a user
router.route("/user/:userId").get(authMiddleware, getUserOrders);

module.exports = router;
