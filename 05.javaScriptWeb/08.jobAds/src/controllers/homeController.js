const router = require("express").Router();

const userService = require("../services/userService");
const adService = require("../services/adService");

router.get("/", async (req, res) => {
    const ads = await adService.getThreeLastAdded().lean();

    res.render("home/home", { ads });
});

router.get("/search", (req, res) => {
    res.render("search");
});

router.post("/search", async (req, res) => {
    let search = await userService.getByUsername(req.body.queryString);

    if (search == undefined) {
        search = false;
    }

    res.render("search", { search });
});

module.exports = router;
