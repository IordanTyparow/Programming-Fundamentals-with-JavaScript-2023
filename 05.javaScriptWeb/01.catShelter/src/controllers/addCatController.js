let router = require("express").Router();
let addCatService = require("../services/addCatService");

router.get("/add-cat", async (req, res) => {
  let breeds = await addCatService.getAllBreeds().lean();

  res.render("addCat", { breeds });
});

router.post("/add-cat", async (req, res) => {
  await addCatService.create(req.body);

  res.redirect("/");
});

module.exports = router;
