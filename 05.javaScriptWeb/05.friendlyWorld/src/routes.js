const router = require("express").Router();

const homeController = require("./controllers/homeController");
const authController = require("./controllers/authController");
const animalController = require("./controllers/animalController");
const searchController = require("./controllers/searchController");

router.use("/", homeController);
router.use("/auth", authController);
router.use("/animal", animalController);
router.use("/search", searchController);
router.get("*", (req, res) => {
    res.render("404");
});

module.exports = router;
