const router = require("express").Router();

const publicationService = require("../services/publicationService");
const userService = require("../services/userService");
const { errorHelper } = require("../middlewares/errorHelper");
const { isAuth } = require("../middlewares/authMiddleware");
const { preloadPublication } = require("../middlewares/authorMiddleware");
const { verifyAuthor } = require("../middlewares/authorMiddleware");

router.get("/gallery", async (req, res) => {
  const paints = await publicationService.getAll().lean();

  res.render("publication/gallery", { paints });
});

router.get("/create", isAuth, (req, res) => {
  res.render("publication/create");
});

router.post("/create", isAuth, async (req, res) => {
  const publicationData = { ...req.body, author: req.user._id };

  try {
    await publicationService.create(publicationData);

    res.redirect("/publication/gallery");
  } catch (error) {
    res.render("publication/create", {
      ...req.body,
      error: errorHelper(error),
    });
  }
});

router.get("/:publicationId/details", async (req, res) => {
  const getCurrentPublication = await publicationService
    .getOneLeaned(req.params.publicationId)
    .populate("author");

  const currentAuthor = await publicationService.getOne(
    req.params.publicationId
  );

  const isHaveUser = req.user ? true : false;
  const isAuthor = req.user?._id == currentAuthor.author;
  const isShared = currentAuthor.usersShared.includes(req.user?._id);

  res.render("publication/details", {
    ...getCurrentPublication,
    isAuthor,
    isShared,
    isHaveUser,
  });
});

router.get("/:publicationId/share", isAuth, async (req, res) => {
  const currentPublication = await publicationService.getOne(
    req.params.publicationId
  );

  currentPublication.usersShared.push(req.user._id);
  await currentPublication.save();

  await userService.sharedPostByUser(req.params.publicationId, req.user._id);

  res.redirect("/");
});

router.get(
  "/:publicationId/edit",
  preloadPublication,
  verifyAuthor,
  async (req, res) => {
    const pubication = await publicationService.getOneLeaned(
      req.params.publicationId
    );

    res.render("publication/edit", { ...pubication });
  }
);

router.post("/:publicationId/edit", async (req, res) => {
  try {
    await publicationService.updateOne(req.params.publicationId, req.body);

    res.redirect(`/publication/${req.params.publicationId}/details`);
  } catch (error) {
    res.render("publication/edit", { ...req.body, error: errorHelper(error) });
  }
});

router.get("/:publicationId/delete", async (req, res) => {
  await publicationService.delete(req.params.publicationId);

  res.redirect("/publication/gallery");
});

module.exports = router;
