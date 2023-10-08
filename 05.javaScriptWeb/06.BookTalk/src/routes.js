const router = require("express").Router();

const homeController = require("../src/controllers/homeController");
const authController = require("../src/controllers/authController");
const bookController = require("../src/controllers/bookController");

router.use(homeController);
router.use("/auth", authController);
router.use("/book", bookController);
router.get("*", (req, res) => {
    res.render("404");
});

module.exports = router;
