const router = require("express").Router();

const postService = require("../services/postService");
const userService = require("../services/userService");

const { errorHelper } = require("../middlewares/errorHelper");
const { isAuth, isGuest } = require("../middlewares/authMiddleware");
const { preloadData, isOwner } = require("../untils/isOwnerMiddlewares");

router.get("/catalog", async (req, res) => {
    const posts = await postService.getAllLeaned();

    res.render("posts/all-posts", { posts });
});

router.get("/create", isAuth, async (req, res) => {
    res.render("posts/create");
});

router.post("/create", isAuth, async (req, res) => {
    const postData = { ...req.body, author: req.user._id };

    try {
        const post = await postService.create(postData);

        const user = await userService.getUser(req.user._id);
        user.myPosts.push(post._id);

        await user.save();

        res.redirect("/post/catalog");
    } catch (error) {
        res.render("posts/create", { ...req.body, error: errorHelper(error) });
    }
});

router.get("/:postId/details", async (req, res) => {
    const post = await postService.getById(req.params.postId).lean();
    const postPopulate = await postService.getByIdPopulate(req.params.postId);

    const isOwner = req.user && post.author == req.user._id;
    const isVoted = req.user && post.votes.some((x) => x == req.user._id);

    let userVoted = [];

    postPopulate.votes.map((x) => userVoted.push(`${x.email}, `));

    res.render("posts/details", { ...post, isOwner, isVoted, userVoted });
});

router.get("/:postId/edit", preloadData, isOwner, async (req, res) => {
    const post = await postService.getById(req.params.postId).lean();

    res.render("posts/edit", { ...post });
});

router.post("/:postId/edit", preloadData, isOwner, async (req, res) => {
    try {
        await postService.update(req.params.postId, req.body);

        res.redirect(`/post/${req.params.postId}/details`);
    } catch (error) {
        res.render("posts/edit", { ...req.body, error: errorHelper(error) });
    }
});

router.get("/:postId/delete", preloadData, isOwner, async (req, res) => {
    await postService.delete(req.params.postId);

    res.redirect("/post/catalog");
});

router.get("/:postId/vote-up", isAuth, async (req, res) => {
    const post = await postService.getById(req.params.postId);

    post.votes.push(req.user._id);
    post.ratingOnPost += 1;

    await post.save();

    res.redirect(`/post/${req.params.postId}/details`);
});

router.get("/:postId/vote-down", isAuth, async (req, res) => {
    const post = await postService.getById(req.params.postId);

    post.votes.push(req.user._id);
    post.ratingOnPost -= 1;

    await post.save();

    res.redirect(`/post/${req.params.postId}/details`);
});

module.exports = router;
