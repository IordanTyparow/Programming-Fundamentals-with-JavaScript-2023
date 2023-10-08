const Animal = require("../models/animalModel");

exports.create = (animalData) => Animal.create(animalData);
exports.getAllLeaned = () => Animal.find().lean();
exports.getOneLeaned = (animalId) => Animal.findById(animalId).lean();
exports.getOne = (animalId) => Animal.findById(animalId).populate("donations");
exports.get3lastedAddedAnimals = () => Animal.find().sort({ _id: -1 }).limit(3);
exports.updateOne = (animalId, AnimalData) =>
    Animal.findByIdAndUpdate(animalId, AnimalData, { runValidators: true });
exports.deleteOne = (animalId) => Animal.findByIdAndDelete(animalId);
exports.getAllByqueryString = (queryString) => {
    if (queryString) {
        return Animal.find({location: { $regex: queryString, $options: "i" },}).lean();
    }
};
