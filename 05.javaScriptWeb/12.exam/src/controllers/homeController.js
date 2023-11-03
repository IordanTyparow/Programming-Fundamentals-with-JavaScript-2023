const router = require("express").Router();

const offerService = require("../services/offerService");

router.get("/", (req, res) => {
    res.render("home/home", { pageTitle: "Home page" });
});

router.get("/search", async (req, res) => {
    const offerts = await offerService.getAll().lean();

    res.render("home/search", { pageTitle: "Search page", offerts });
});

router.post("/search", async (req, res) => {
    const offerts = await offerService.searchOffer(req.body).lean();

    res.render("home/search", { pageTitle: "Search page", offerts });
});

module.exports = router;
