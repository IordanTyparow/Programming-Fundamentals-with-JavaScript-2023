const router = require("express").Router();

const homeController = require("../src/controllers/homeController");
const authController = require("../src/controllers/authController");
const offerController = require("../src/controllers/offerController");

router.use(homeController);
router.use("/auth", authController);
router.use("/offer", offerController);
router.get("*", (req, res) => {
    res.render("404", { pageTitle: "404" });
});

module.exports = router;
