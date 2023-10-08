let mongoose = require("mongoose");

let accessorySchema = new mongoose.Schema({
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
  cubes: [{
    type: mongoose.Types.ObjectId,
    ref: 'Cube'
  }],
});

let Accessory = mongoose.model("accessorie", accessorySchema);

module.exports = Accessory;
