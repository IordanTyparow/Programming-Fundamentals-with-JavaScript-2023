const User = require("../models/userModel");

const { SALT, SECRET } = require("../config/env");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (userData) => {
    if (userData.password != userData.repeatPassword) {
        throw { message: "Password is not maching!" };
    }

    if (!userData.password) {
        throw { message: "Password is not require!" };
    }

    const hashedPassword = await bcrypt.hash(userData.password, SALT);

    const createdUser = User.create({
        email: userData.email,
        username: userData.username,
        password: hashedPassword,
    });

    if (!createdUser) {
        throw {
            message: "Invalid request!",
        };
    }

    return createdUser;
};

exports.login = async ({ email, password }) => {
    if (!email || !password) {
        throw {
            message: "Email and password is require!",
        };
    }

    const user = await User.findOne({ email: email });

    if (!user) {
        throw { message: "Password or username is not valid!" };
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw { message: "Invalid username or password!" };
    }

    return user;
};

exports.createToken = (user) => {
    return new Promise((resolve, reject) => {
        jwt.sign(
            {
                _id: user._id,
                email: user.email,
                username: user.username,
            },
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
