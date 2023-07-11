const router = require("express").Router();
const userRoutes = require("./user-routes");
const artistRoutes = require("./artist-routes");

const orderRoutes = require("./order-routes");
const purchaseHistoryRoutes = require("./purchase-history-routes");

router.use("/users", userRoutes);
router.use("/artists", artistRoutes);

router.use("/orders", orderRoutes);
router.use("/purchase-history", purchaseHistoryRoutes);

module.exports = router;
