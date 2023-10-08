let mongoose = require("mongoose");

let cubeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is require!"],
    validator: /[a-zA-Z0-9 ]/,
    minLength: [5, 'Name length should be 5'],
  },
  description: {
    type: String,
    required: [true, "Description is require!"],
    validator: /[a-zA-Z0-9 ]/,
    minLength: 20,
  },
  imageUrl: {
    type: String,
    required: [true, "ImageUrl is require!"],
    validator: /^http:$/,
  },
  difficultyLevel: {
    type: Number,
    required: true,
  },
  accessories: [
    {
      type: mongoose.Types.ObjectId,
      ref: "accessorie",
    },
  ],
  owner: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
});

let Cube = mongoose.model("cube", cubeSchema);

module.exports = Cube;
