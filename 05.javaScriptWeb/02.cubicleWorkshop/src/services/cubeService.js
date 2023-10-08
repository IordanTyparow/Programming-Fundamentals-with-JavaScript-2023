let Cube = require("../models/cubeModel");
let Accessory = require("../models/accessoryModel");

exports.save = (cube) => Cube.create(cube);

exports.getOne = (cubeId) => Cube.findById(cubeId).populate("accessories");

exports.getAll = () => Cube.find().lean();

exports.search = async (name = "", from, to) => {
  let cubes = await Cube.find().lean();

  let result = cubes
    .filter((x) => x.name.toLowerCase().includes(name.toLowerCase()))
    .filter((x) => x.difficultyLevel >= from && x.difficultyLevel <= to);

  return result;
};

exports.attachAccessory = async (cubeId, accessoryId) => {
  let cube = await Cube.findById(cubeId);
  let accessory = await Accessory.findById(accessoryId);

  cube.accessories.push(accessory);
  accessory.cubes.push(cube);

  await cube.save();
  await accessory.save();
};

exports.delete = (cubeId) => Cube.findByIdAndDelete(cubeId);

exports.edit = (cubeId, data) => Cube.findByIdAndUpdate(cubeId, data);
