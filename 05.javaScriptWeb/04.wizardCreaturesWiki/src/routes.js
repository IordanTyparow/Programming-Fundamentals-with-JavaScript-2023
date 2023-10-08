const routes = require("express").Router();

// Create routes Middlewares
const homeController = require("./controllers/homeController");
const authController = require("./controllers/authController");
const creatureController = require("./controllers/creatureController");
const profileController = require("./controllers/profileController");

routes.use("/", homeController);
routes.use("/auth", authController);
routes.use("/creatures", creatureController);
routes.use("/user", profileController);

module.exports = routes;
