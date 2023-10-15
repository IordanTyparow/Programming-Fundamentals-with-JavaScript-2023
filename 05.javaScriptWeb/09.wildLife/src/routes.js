const router = require("express").Router();

const homeController = require("./controllers/homeConroller");
const authController = require("./controllers/authController");
const postsController = require("./controllers/postsController");

router.use(homeController);
router.use("/auth", authController);
router.use("/post", postsController);
router.get("*", (req, res) => {
    res.render("404");
});

module.exports = router;
