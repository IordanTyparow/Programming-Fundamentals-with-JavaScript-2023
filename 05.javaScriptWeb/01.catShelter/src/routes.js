let router = require("express").Router();

let homeController = require("./controllers/homeController");
let addBreedController = require("./controllers/addBreedController");
let addCatController = require("./controllers/addCatController");
let editCatController = require("./controllers/editCatController");
let homeCatController = require("./controllers/homeCatController");

router.use("/", homeController);
router.use("/cats", addCatController);
router.use("/cats", addBreedController);
router.use("/cats", editCatController);
router.use("/cats", homeCatController);

module.exports = router;
