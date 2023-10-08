const router = require("express").Router();

const animalService = require("../services/animalService");

router.get("/", async (req, res) => {
    const animals = await animalService.get3lastedAddedAnimals().lean();

    res.render("home/home", { animals });
});

module.exports = router;
