const Ad = require("../models/adModel");

exports.getAllLeaned = () => Ad.find().lean();

exports.create = (adData) => Ad.create(adData);

exports.getByIdLeaned = (adId) => Ad.findById(adId).lean().populate("author");

exports.getById = (adId) => Ad.findById(adId);

exports.edit = (adId, adData) =>
    Ad.findByIdAndUpdate(adId, adData, { runValidators: true });

exports.delete = (adId) => Ad.findByIdAndDelete(adId);

exports.getThreeLastAdded = () => Ad.find().sort({ _id: -1 }).limit(3);
