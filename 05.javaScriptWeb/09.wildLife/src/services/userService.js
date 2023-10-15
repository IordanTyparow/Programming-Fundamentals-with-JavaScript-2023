const User = require("../models/userModel");

exports.getUser = (userId) =>
    User.findById(userId).populate("myPosts").populate("author");
