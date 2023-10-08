const router = require("express").Router();

const cryptoService = require("../services/cryptoService");

router.get("/", async (req, res) => {
    const crypto = await cryptoService.getThreeLasted3added().lean();

    res.render("home/home", { crypto });
});

router.get("/search", (req, res) => {
    res.render("search");
});

router.post("/search", async (req, res) => {
    let search = await cryptoService.search(req.body);

    console.log(search);

    if (search.length === 0) {
        search = await cryptoService.getAllLeaned();
    }

    res.render("search", { search });
});

module.exports = router;
