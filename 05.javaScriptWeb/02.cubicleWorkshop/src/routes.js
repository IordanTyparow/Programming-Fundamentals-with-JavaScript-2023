let router = require("express").Router();

let homeContoroller = require("./controllers/homeController");
let aboutContoroller = require("./controllers/aboutController");
let createContoroller = require("./controllers/createController");
let authController = require("./controllers/authController");

router.use("/", homeContoroller);
router.use("/cube", aboutContoroller);
router.use("/cube", createContoroller);
router.use("/auth", authController);

module.exports = router;
