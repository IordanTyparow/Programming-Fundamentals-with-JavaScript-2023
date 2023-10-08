const router = require("express").Router();

const homeController = require("./controllers/homeController");
const authController = require("./controllers/authController");
const adController = require("./controllers/adController");

router.use(homeController);
router.use("/auth", authController);
router.use("/ad", adController);

module.exports = router;
