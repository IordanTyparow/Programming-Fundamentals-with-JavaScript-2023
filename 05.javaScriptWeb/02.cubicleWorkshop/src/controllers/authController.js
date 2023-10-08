const router = require("express").Router();
const userService = require("../services/authService");

router.get("/login", (req, res) => {
  res.render("loginPage");
});

router.post("/login", async (req, res) => {
  try {
    let token = await userService.login(req.body);

    if (!token) {
      return res.render("404");
    }

    res.cookie("user-session", token);

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

router.get("/register", (req, res) => {
  res.render("registerPage");
});

router.post("/register", async (req, res) => {
  try {
    await userService.register(req.body);

    res.redirect("/auth/login");
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

router.get("/logout", (req, res) => {
  res.clearCookie("user-session");

  res.redirect("/");
});

module.exports = router;
