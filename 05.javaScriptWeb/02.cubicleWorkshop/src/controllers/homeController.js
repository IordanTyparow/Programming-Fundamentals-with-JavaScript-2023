const router = require("express").Router();
let cubeService = require("../services/cubeService");

router.get("/", async (req, res) => {
  let cubes = await cubeService.getAll();

  res.render("index", { cubes });
});

router.post("/", async (req, res) => {
  let name = req.body.search;
  let from = Number(req.body.from) || 0;
  let to = Number(req.body.to) || 6;

  let cubes = await cubeService.search(name, from, to);

  res.render("index", { cubes });
});

module.exports = router;
