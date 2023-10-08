const router = require("express").Router();

const publicationService = require("../services/publicationService");
const userService = require("../services/userService");

router.get("/", async (req, res) => {
  const publicationResult = await publicationService.getAll().lean();
  const publication = publicationResult.map((x) => ({
    ...x,
    sharedCount: x.usersShared.length,
  }));

  res.render("home/home", { publication });
});

router.get("/profile", async (req, res) => {
  const user = await userService.getOne(req.user._id);
  const publications = await userService.getOne(req.user._id);

  const shared = user.userShared.map((x) => x.title).join(", ");
  const author = publications.userShared.map((x) => x.title).join(", ");

  res.render("profile", { shared, author });
});

module.exports = router;
