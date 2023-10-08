const User = require("../models/userModel");

exports.getOneLeaned = (user) => User.find({ email: user.email }).lean();
exports.getOne = (id) => User.findById(id);
