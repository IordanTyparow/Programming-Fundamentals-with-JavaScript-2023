const Post = require("../models/postModel");

exports.create = (postData) => Post.create(postData);

exports.getAllLeaned = () => Post.find().lean();

exports.getByIdPopulate = (postId) => Post.findById(postId).populate("votes");

exports.getById = (postId) => Post.findById(postId);

exports.update = (postId, postData) =>
    Post.findByIdAndUpdate(postId, postData, { runValidators: true });

exports.delete = (postId) => Post.findByIdAndDelete(postId);

exports.getAllUserPosted = (userId) =>
    Post.find({ author: userId }).populate("author");
