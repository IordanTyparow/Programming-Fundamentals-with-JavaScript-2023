const router = require("express").Router();

const animalService = require("../services/animalService");
const { errorHelper } = require("../middlewares/errorHelper");
const { isAuth } = require("../middlewares/authMiddleware");
const { preloadData, isOwner } = require("../untils/isOwnerMiddlewares");

router.get("/dashboard", async (req, res) => {
    const animals = await animalService.getAllLeaned();

    res.render("animal/dashboard", { animals });
});

router.get("/create", isAuth, (req, res) => {
    res.render("animal/create");
});

router.post("/create", isAuth, async (req, res) => {
    const animalData = { ...req.body, _owner: req.user._id };

    try {
        await animalService.create(animalData);

        res.redirect("/animal/dashboard");
    } catch (error) {
        res.render("animal/create", { ...req.body, error: errorHelper(error) });
    }
});

router.get("/:animalId/details", async (req, res) => {
    const animalLeaned = await animalService.getOneLeaned(req.params.animalId);

    const isOwner = animalLeaned._owner == req.user?._id;
    const isDonated =
        req.user && animalLeaned.donations.some((c) => c._id == req.user._id);

    console.log(isDonated);

    res.render("animal/details", { ...animalLeaned, isOwner, isDonated });
});

router.get("/:animalId/edit", isAuth, async (req, res) => {
    const animalLeaned = await animalService.getOneLeaned(req.params.animalId);

    res.render("animal/edit", { ...animalLeaned });
});

router.post("/:animalId/edit", async (req, res) => {
    try {
        await animalService.updateOne(req.params.animalId, req.body);

        res.redirect(`/animal/${req.params.animalId}/details`);
    } catch (error) {
        res.render("animal/edit", { ...req.body, error: errorHelper(error) });
    }
});

router.get(
    "/:animalId/delete",
    preloadData,
    isOwner,
    isAuth,
    async (req, res) => {
        await animalService.deleteOne(req.params.animalId);

        res.redirect("/animal/dashboard");
    }
);

router.get("/:animalId/donate", async (req, res) => {
    const animal = await animalService.getOne(req.params.animalId);

    animal.donations.push(req.user._id);

    await animal.save();

    res.redirect(`/animal/${req.params.animalId}/details`);
});

module.exports = router;
