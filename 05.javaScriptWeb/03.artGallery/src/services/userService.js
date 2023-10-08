const User = require("../models/userModel");

exports.sharedPostByUser = async (publicationId, userId) => {
  const currentUser = await User.findById(userId);

  currentUser.userShared.push(publicationId);

  await currentUser.save();
};

exports.getOne = (userId) => User.findById(userId).populate("userShared");
