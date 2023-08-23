let mongoose = require("mongoose");

let url = "mongodb://localhost:27017/Cubecle";

module.exports = () => mongoose.connect(url).then(() => {
  console.log("Database connected!");
});
