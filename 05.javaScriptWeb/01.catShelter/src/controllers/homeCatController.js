let router = require("express").Router();
let catService = require("../services/addCatService");
let Cat = require("../module/catModule");

router.get("/cat-shelter/:id", async (req, res) => {
  let cats = await Cat.findById(req.params.id).lean().exec();

  console.log(cats);

  res.render("catShelter", { cats });
});

router.post("/cat-shelter/:id", async (req, res) => {
  await catService.deleteCat(req.params.id);

  res.redirect("/");
});

module.exports = router;
