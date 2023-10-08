const Publication = require("../models/publicationModel");

exports.create = (publicationData) => Publication.create(publicationData);
exports.getAll = () => Publication.find();
exports.getOneLeaned = (publicationId) =>
  Publication.findById(publicationId).lean();
exports.getOne = (publicationId) => Publication.findById(publicationId);
exports.updateOne = (publicationId, publicationData) =>
  Publication.findByIdAndUpdate(publicationId, publicationData, {
    runValidators: true,
  });
exports.delete = (publicationId) =>
  Publication.findByIdAndDelete(publicationId);
exports.getAllPopulated = () => Publication.find().populate("usersShared");
