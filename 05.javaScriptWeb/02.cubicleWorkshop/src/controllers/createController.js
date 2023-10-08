let router = require("express").Router();
let cubeService = require("../services/cubeService");
let accessoryService = require("../services/accessoryService");

let { isAuth } = require("../middlewares/authMiddleware");

router.get("/create", isAuth, (req, res) => {
  res.render("create");
});

router.post("/create", async (req, res) => {
  let cube = req.body;
  cube.owner = req.user._id;

  try {
    await cubeService.save(cube);

    res.redirect("/");
  } catch (error) {
    let text = "";

    if (error.errors) {
      text = Object.values(error.errors)[0].message;
    } else {
      text = error.message;
    }

    return res.status(404).render("404", { error: text });
  }
});

router.get("/details/:id", async (req, res) => {
  let cube = await cubeService.getOne(req.params.id).lean();
  let ownerId = req.user._id;

  let isOwner = cube.owner == ownerId ? true : false;

  console.log(isOwner);

  res.render("details", { cube, isOwner });
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
  let allAccessory = await accessoryService
    .getAllWithout(cube.accessories)
    .lean();

  res.render("attachAccessory", { cube, allAccessory });
});

router.post("/attach-accessory/:id", async (req, res) => {
  let accessoryId = req.body.accessory;
  let cubeId = req.params.id;

  await cubeService.attachAccessory(cubeId, accessoryId);

  res.redirect(`/cube/details/${req.params.id}`);
});

router.get("/delete/:id", async (req, res) => {
  let cube = await cubeService.getOne(req.params.id).lean();

  res.render("deleteCubePage", { cube });
});

router.post("/delete/:id", async (req, res) => {
  await cubeService.delete(req.params.id);

  res.redirect("/");
});

router.get("/edit/:id", async (req, res) => {
  let cube = await cubeService.getOne(req.params.id).lean();

  res.render("editCubePage", { cube });
});

router.post("/edit/:id", async (req, res) => {
  await cubeService.edit(req.params.id, req.body);

  res.redirect(`/cube/details/${req.params.id}`);
});

module.exports = router;
