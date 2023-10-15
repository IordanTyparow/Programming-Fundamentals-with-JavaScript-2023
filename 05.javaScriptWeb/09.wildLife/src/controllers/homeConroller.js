const router = require("express").Router();

const postService = require("../services/postService");

const { isAuth } = require("../middlewares/authMiddleware");

router.get("/", async (req, res) => {
    const posts = await postService.getAllLeaned();

    res.render("home/home", { posts });
});

router.get("/profile", isAuth, async (req, res) => {
    const userPosts = await postService.getAllUserPosted(req.user._id).lean();

    res.render("my-posts", { userPosts });
});

module.exports = router;
