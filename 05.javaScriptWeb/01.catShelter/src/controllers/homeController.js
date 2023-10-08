let router = require("express").Router();
let catService = require("../services/addCatService");

router.get("/", async (req, res) => {
  let cats = await catService.getAll().lean();

  res.render("home/index", { cats });
});

router.post("/search", async (req, res) => {
  let cats = await catService.getAllByName(req.body.name).lean();

  res.render("home/index", { cats });
});

module.exports = router;
