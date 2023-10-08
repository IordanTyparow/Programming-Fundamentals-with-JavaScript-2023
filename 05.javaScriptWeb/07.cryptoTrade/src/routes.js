const router = require("express").Router();

const homeController = require("./controllers/homeContorller");
const authController = require("./controllers/authController");
const cryptoController = require("./controllers/cryptoController");

router.use(homeController);
router.use("/auth", authController);
router.use("/crypto", cryptoController);
router.get("*", (req, res) => {
    res.render("404");
});

module.exports = router;
