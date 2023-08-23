let router = require("express").Router();

let homeContoroller = require("./controllers/homeController");
let aboutContoroller = require("./controllers/aboutController");
let createContoroller = require("./controllers/createController");

router.use("/", homeContoroller);
router.use("/cube", aboutContoroller);
router.use("/cube", createContoroller);

module.exports = router;
