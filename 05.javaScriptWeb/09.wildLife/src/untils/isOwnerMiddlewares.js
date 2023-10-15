const postService = require("../services/postService");

exports.preloadData = async (req, res, next) => {
    const post = await postService.getById(req.params.postId);

    res.post = post;
    next();
};

exports.isOwner = (req, res, next) => {
    if (res.post.author == req.user._id) {
        next();
    } else {
        res.render("404");
    }
};
