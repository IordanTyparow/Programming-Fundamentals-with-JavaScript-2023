const router = require("express").Router();

const bookService = require("../services/bookService");
const { isAuth } = require("../middlewares/authMiddleware");

router.get("/", (req, res) => {
    res.render("home/home");
});

router.get("/profile", isAuth, async (req, res) => {
    const userBooks = await bookService.getUserBooks(req.user._id);

    res.render("profile", { userBooks });
});

module.exports = router;
