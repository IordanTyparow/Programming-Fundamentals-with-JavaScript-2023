const router = require("express").Router();

const { isAuth } = require("../middlewares/authMiddleware");
const animalService = require("../services/animalService");

router.get("/", isAuth, async (req, res) => {
    let animals = await animalService.getAllByqueryString(req.query.search);

    if (animals == undefined) {
        animals = await animalService.getAllLeaned();
    }

    res.render("search/search", { animals });
});

module.exports = router;
