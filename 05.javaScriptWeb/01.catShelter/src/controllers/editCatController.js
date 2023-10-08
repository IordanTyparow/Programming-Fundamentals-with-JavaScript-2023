let router = require("express").Router();
let catService = require("../services/addCatService");

router.get("/edit-cat/:id", async (req, res) => {
  let cat = await catService.getById(req.params.id).lean();
  let breeds = await catService.getAllBreeds().lean();

  res.render("editCat", { cat, breeds });
});

router.post("/edit-cat/:id", async (req, res) => {
  await catService.editId(req.params.id, req.body);

  res.redirect("/");
});

module.exports = router;
