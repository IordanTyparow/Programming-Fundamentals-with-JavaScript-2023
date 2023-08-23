let router = require("express").Router();
let cubeService = require("../services/cubeService");
let accessoryService = require("../services/accessoryService");

router.get("/create", (req, res) => {
  res.render("create");
});

router.post("/create", async (req, res) => {
  await cubeService.save(req.body);

  res.redirect("/");
});

router.get("/details/:id", async (req, res) => {
  let cube = await cubeService.getOne(req.params.id).lean();

  res.render("details", { cube });
});

router.get("/create-accessory", (req, res) => {
  res.render("createAccessory");
});

router.post("/create-accessory", async (req, res) => {
  await accessoryService.save(req.body);

  res.render("index");
});

router.get("/attach-accessory/:id", async (req, res) => {
  let cube = await cubeService.getOne(req.params.id).lean();
  let allAccessory = await accessoryService.getAllWithout(cube.accessories).lean();

  res.render("attachAccessory", { cube, allAccessory });
});

router.post("/attach-accessory/:id", async (req, res) => {
  let accessoryId = req.body.accessory;
  let cubeId = req.params.id;

  await cubeService.attachAccessory(cubeId, accessoryId);

  res.redirect(`/cube/details/${req.params.id}`);
});

module.exports = router;
