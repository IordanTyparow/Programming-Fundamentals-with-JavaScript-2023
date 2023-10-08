let router = require("express").Router();
let breedService = require("../services/addBreedService");

router.get("/add-breed", (req, res) => {
  res.render("addBreed");
});

router.post("/add-breed", async (req, res) => {
  await breedService.create(req.body);

  res.redirect("/");
});

module.exports = router;
