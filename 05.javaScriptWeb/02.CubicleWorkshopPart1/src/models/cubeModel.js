let mongoose = require("mongoose");

let cubeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  difficultyLevel: {
    type: Number,
    required: true,
  },
  accessories: [{
    type: mongoose.Types.ObjectId,
    ref: 'accessorie'
  }],
});

let Cube = mongoose.model("cube", cubeSchema);

module.exports = Cube;
