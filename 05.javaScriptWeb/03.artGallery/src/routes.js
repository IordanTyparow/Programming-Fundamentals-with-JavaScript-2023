const routes = require("express").Router();

const homeController = require("./controllers/homeController");
const authController = require("./controllers/authController");
const publicationController = require("./controllers/publicationController");

routes.use(homeController);
routes.use("/auth", authController);
routes.use("/publication", publicationController);
routes.use("*", function (req, res) {
  res.render("404");
});

module.exports = routes;
