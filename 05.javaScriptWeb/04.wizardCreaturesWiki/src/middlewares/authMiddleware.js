const jwt = require("jsonwebtoken");
const { SECRET, SESSION_COOKIE_NAME } = require("../config/env");

const { promisify } = require("util");
const jwtVerify = promisify(jwt.verify);

exports.auth = async (req, res, next) => {
  let token = req.cookies[SESSION_COOKIE_NAME];

  if (token) {
    const decodedToken = await jwtVerify(token, SECRET);

    req.user = decodedToken;
    res.locals.user = decodedToken;
    next();
  } else {
    next();
  }
};

exports.isAuth = (req, res, next) => {
  if (!req.user) {
    return res.render("404");
  }

  next();
};
