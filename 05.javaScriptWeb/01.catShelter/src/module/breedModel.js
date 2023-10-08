let mongoose = require("mongoose");

let breedSchema = new mongoose.Schema({
  breed: {
    type: String,
    required: true,
  },
});

let Breed = mongoose.model("breed", breedSchema);

module.exports = Breed;
