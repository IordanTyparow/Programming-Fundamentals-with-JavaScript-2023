const User = require("../models/userModel");

exports.getUser = (userId) => User.findById(userId);
