let Accessory = require("../models/accessoryModel");

exports.save = (accessoryData) => Accessory.create(accessoryData);

exports.getAll = () => Accessory.find();

exports.getAllWithout = (ids) => Accessory.find({ _id: { $nin: ids } });
