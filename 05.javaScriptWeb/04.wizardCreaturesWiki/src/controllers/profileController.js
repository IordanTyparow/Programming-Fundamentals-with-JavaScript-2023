const router = require("express").Router();

const { isAuth } = require("../middlewares/authMiddleware");
const creatureService = require("../services/creatureService");

router.get("/profile", isAuth, async (req, res) => {
  const creatures = await creatureService
    .getAlluserCreated(req.user._id)
    .populate("owner")
    .lean();

  res.render("posts/my-posts", { creatures });
});

module.exports = router;
