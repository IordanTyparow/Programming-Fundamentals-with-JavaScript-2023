let Cube = require("../models/cubeModel");
let Accessory = require("../models/accessoryModel");

exports.save = (cube) => Cube.create(cube);

exports.getOne = (cubeId) => Cube.findById(cubeId).populate('accessories');

exports.attachAccessory = async (cubeId, accessoryId) => {
  let cube = await Cube.findById(cubeId);
  let accessory = await Accessory.findById(accessoryId);

  cube.accessories.push(accessory);
  accessory.cubes.push(cube);

  await cube.save();
  await accessory.save();
};
