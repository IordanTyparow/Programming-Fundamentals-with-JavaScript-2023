const router = require("express").Router();

const authService = require("../services/authService");

const { SESSION_COOKIE_NAME } = require("../config/env");
const { errorHelper } = require("../middlewares/errorHelper");
const { isAuth } = require("../middlewares/authMiddleware");

router.get("/register", (req, res) => {
  res.render("auth/register");
});

router.post("/register", async (req, res) => {
  try {
    const user = await authService.register(req.body);
    const token = await authService.createToken(user);

    res.cookie(SESSION_COOKIE_NAME, token);
    res.redirect("/");
  } catch (error) {
    res.render("auth/register", { error: errorHelper(error) });
  }
});

router.get("/login", (req, res) => {
  res.render("auth/login");
});

router.post("/login", async (req, res) => {
  try {
    const user = await authService.login(req.body);
    const token = await authService.createToken(user);

    res.cookie(SESSION_COOKIE_NAME, token);

    res.redirect("/");
  } catch (error) {
    res.render("auth/login", { error: errorHelper(error) });
  }
});

router.get("/logout", isAuth,(req, res) => {
  res.clearCookie(SESSION_COOKIE_NAME);
  res.redirect("/");
});

module.exports = router;
