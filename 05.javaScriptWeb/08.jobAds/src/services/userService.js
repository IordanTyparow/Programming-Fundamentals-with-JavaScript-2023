const User = require("../models/userModel");

exports.getByUsername = (search) => {
    if (search) {
        return (User.findOne({ email: search })).populate("myAds").lean();
    }
};

exports.getById = (userId) => User.findById(userId);
