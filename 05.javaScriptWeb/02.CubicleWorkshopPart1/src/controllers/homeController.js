const router = require("express").Router();
let Cube = require("../models/cubeModel");

router.get("/", async (req, res) => {
  let cubes = await Cube.find().lean();

  res.render("index", { cubes });
});

module.exports = router;
