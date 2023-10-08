const mongoose = require("mongoose");

const creatureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is require!"],
    minlength: [2, "The name should be 2 characters long"],
  },
  species: {
    type: String,
    required: [true, "Species is require!"],
    minlength: [3, "The name should be 2 characters long"],
  },
  skinColor: {
    type: String,
    required: [true, "SkinColor is require!"],
    minlength: [3, "The name should be 2 characters long"],
  },
  eyeColor: {
    type: String,
    required: [true, "EyeColor is require!"],
    minlength: [3, "The name should be 2 characters long"],
  },
  image: {
    type: String,
    required: [true, "Image is require!"],
    validate: {
      validator: function (url) {
        return /^http/.test(url);
      },
      message: (value) => `The url should be start with http or https`,
    },
  },
  description: {
    type: String,
    required: [true, "Description is require!"],
    minlength: [5, "the Description should be 5 characters long"],
    maxlength: [500, "the Description shouldn't be 500 characters long"],
  },
  votes: [
    {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
  ],
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
});

const Creature = mongoose.model("creature", creatureSchema);

module.exports = Creature;
