let Cat = require("../module/catModule");
let Breed = require("../module/breedModel");

exports.create = (catData) => Cat.create(catData);

exports.getAll = () => Cat.find();

exports.getAllBreeds = () => Breed.find();

exports.getById = (id) =>  Cat.findById(id);

exports.editId = (id, cat) => Cat.findByIdAndUpdate(id, cat);

exports.deleteCat = (id) => Cat.findByIdAndDelete(id);

exports.getAllByName = (name) => {
  if (!name) {
    return Cat.find();
  }

  return Cat.find({ name: name });
};
