let User = require("../models/userModel");
let bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");

const { salt, secret } = require("../config/appConfig");

exports.register = async ({ username, password, repeatPassword }) => {
  if (!username) {
    throw {
      message: "Username is require!",
    };
  }

  if (!password && !repeatPassword) {
    throw {
      message: "Passwords is require",
    };
  }

  if (password !== repeatPassword) {
    throw {
      message: "Passwords don`t match!",
    };
  }

  let hashedPassword = await bcrypt.hash(password, salt);

  let createdUser = User.create({
    username,
    password: hashedPassword,
  });

  return createdUser;
};

exports.login = async ({ username, password }) => {
  let user = await User.findOne({ username });

  if (!user) {
    throw {
      message: "Dont have accout with this username!",
    };
  }

  let isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    throw {
      message: "Invalid username or password",
    };
  }

  let result = new Promise((resolve, reject) => {
    const token = jwt.sign(
      { _id: user._id, username: user.username },
      secret,
      {
        expiresIn: "2d",
      },
      (err, token) => {
        if (err) {
          return reject(err);
        }

        resolve(token);
      }
    );
  });

  return result;
};
