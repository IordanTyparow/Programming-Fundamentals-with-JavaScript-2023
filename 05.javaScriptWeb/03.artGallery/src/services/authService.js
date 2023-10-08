const User = require("../models/userModel");

const bcrypt = require("bcrypt");
const { SALT, SECRET } = require("../config/env");

const jwt = require("jsonwebtoken");

exports.login = async ({ username, password }) => {
  if (!username || !password) {
    throw {
      message: "Username and password is require!",
    };
  }

  const user = await User.findOne({ username: username });

  if (!user) {
    throw { message: "Password or username is not valid!" };
  }

  const isValid = bcrypt.compare(user.password, password);

  if (!isValid) {
    throw {
      message: "Username or password is not valid!",
    };
  }

  return user;
};

exports.register = async (username, password, repeatPassword, address) => {
  if (password != repeatPassword) {
    throw { message: "Password is not maching!" };
  }

  const hashedPassword = await bcrypt.hash(password, SALT);

  const createdUser = User.create({
    username,
    password: hashedPassword,
    address,
  });

  if (!createdUser) {
    throw {
      message: "Invalid request!",
    };
  }

  return createdUser;
};

exports.createToken = (user) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      { _id: user._id, username: user.username, address: user.address },
      SECRET,
      { expiresIn: "2d" },
      (err, decodedToken) => {
        if (err) {
          return reject(err);
        }

        resolve(decodedToken);
      }
    );
  });
};
