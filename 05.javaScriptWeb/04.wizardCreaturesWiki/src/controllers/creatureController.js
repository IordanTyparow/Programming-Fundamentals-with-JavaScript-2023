const router = require("express").Router();

const creatureService = require("../services/creatureService");
const userService = require("../services/userService");

const { errorHelper } = require("../middlewares/errorHelper");
const { isAuth } = require("../middlewares/authMiddleware");

const {
  preloadData,
  verifyAuthor,
} = require("../middlewares/authorMiddleware");

router.get("/create", isAuth, (req, res) => {
  res.render("creatures/create");
});

router.post("/create", isAuth, async (req, res) => {
  try {
    const monster = await creatureService.createCreature({
      ...req.body,
      owner: req.user._id,
    });

    const user = await userService.getOne(req.user._id);

    res.redirect("/creatures/allPosts");
  } catch (error) {
    res.render("creatures/create", { ...req.body, error: errorHelper(error) });
  }
});

router.get("/allPosts", async (req, res) => {
  const creatures = await creatureService.getAllCreatures().lean();

  res.render("posts/all-posts", { creatures });
});

router.get("/:creatureId/details", async (req, res) => {
  const creatureLeaned = await creatureService
    .getById(req.params.creatureId)
    .lean();
  const creatures = await creatureService.getById(req.params.creatureId);
  const author = creatures.owner == req.user?._id;
  const votes = creatures.votes.includes(req.user?._id);

  const peopleVotes = (
    await creatureService.getAllVotedPeoples(req.params.creatureId)
  ).votes
    .map((x) => x.email)
    .join(", ");

  const creaturesVotes = creatures.votes.length;

  res.render("creatures/details", {
    ...creatureLeaned,
    author,
    votes,
    peopleVotes,
    creaturesVotes,
  });
});

router.get("/:creatureId/vote", async (req, res) => {
  const creature = await creatureService.getById(req.params.creatureId);

  creature.votes.push(req.user._id);

  await creature.save();

  res.redirect(`/creatures/${req.params.creatureId}/details`);
});

router.get("/:creatureId/edit", preloadData, verifyAuthor, async (req, res) => {
  const creature = await creatureService.getById(req.params.creatureId).lean();

  res.render("creatures/edit", { ...creature });
});

router.post(
  "/:creatureId/edit",
  preloadData,
  verifyAuthor,
  async (req, res) => {
    try {
      await creatureService.updateOne(req.params.creatureId, req.body);

      res.redirect(`/creatures/${req.params.creatureId}/details`);
    } catch (error) {
      res.render("creatures/edit", { ...req.body, error: errorHelper(error) });
    }
  }
);

router.get(
  "/:creatureId/delete",
  preloadData,
  verifyAuthor,
  async (req, res) => {
    await creatureService.deleteOne(req.params.creatureId);

    res.redirect("/creatures/allPosts");
  }
);

module.exports = router;
