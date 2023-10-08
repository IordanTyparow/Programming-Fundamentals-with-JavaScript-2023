const Creature = require("../models/creatureModel");

exports.createCreature = (creatureData) => Creature.create(creatureData);
exports.getAllCreatures = () => Creature.find();
exports.getById = (id) => Creature.findById(id);
exports.getAllVotedPeoples = (id) => Creature.findById(id).populate("votes");
exports.updateOne = (creatureId, data) =>
  Creature.findByIdAndUpdate(creatureId, data, { runValidators: true });
exports.deleteOne = (creatureId) => Creature.findByIdAndDelete(creatureId);
exports.getAlluserCreated = (userId) => {
  return Creature.find({ owner: userId });
};
