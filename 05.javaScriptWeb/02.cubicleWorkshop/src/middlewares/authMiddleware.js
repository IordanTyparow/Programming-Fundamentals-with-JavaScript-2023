let jwt = require("jsonwebtoken");
const { secret } = require("../config/appConfig");
const { promisify } = require("util");

let jwtVerify = promisify(jwt.verify);

exports.auth = async (req, res, next) => {
  let token = req.cookies["user-session"];

  if (token) {
    try {
      let decodedToken = await jwtVerify(token, secret);

      req.user = decodedToken;
      res.locals.user = decodedToken;
    } catch (error) {
      return res.render("404");
    }
  }

  next();
};

exports.isAuth = (req, res, next) => {
  if (!req.user) {
    return res.render("404");
  }

  next();
};
