let mongoose = require("mongoose");

let catSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  upload: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
});

let Cat = mongoose.model("Cat", catSchema);

module.exports = Cat;
