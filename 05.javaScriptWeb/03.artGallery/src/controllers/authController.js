const router = require("express").Router();

const authService = require("../services/authService");
const { isAuth } = require("../middlewares/authMiddleware");

const { SESSION_COOKIE_NAME } = require("../config/env");
const { errorHelper } = require("../middlewares/errorHelper");

router.get("/login", async (req, res) => {
  res.render("auth/login");
});

router.post("/login", async (req, res) => {
  try {
    const user = await authService.login(req.body);
    const token = await authService.createToken(user);

    res.cookie(SESSION_COOKIE_NAME, token);

    res.redirect("/");
  } catch (error) {
    return res.render("auth/login", { error: errorHelper(error) });
  }
});

router.get("/register", (req, res) => {
  res.render("auth/register");
});

router.post("/register", async (req, res) => {
  const { username, password, repeatPassword, address } = req.body;

  try {
    const createdUser = await authService.register(
      username,
      password,
      repeatPassword,
      address
    );
    const token = await authService.createToken(createdUser);

    res.cookie(SESSION_COOKIE_NAME, token);

    res.redirect("/");
  } catch (error) {
    return res.render("auth/register", { error: errorHelper(error) });
  }
});

router.get("/logout", isAuth, (req, res) => {
  res.clearCookie(SESSION_COOKIE_NAME);
  res.redirect("/");
});

module.exports = router;
