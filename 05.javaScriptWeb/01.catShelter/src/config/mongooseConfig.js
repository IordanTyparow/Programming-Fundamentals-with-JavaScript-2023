let mongoose = require("mongoose");

let url = "mongodb://localhost:27017/cat-shelter";

module.exports = () =>
  mongoose.connect(url).then(() => console.log("dataBase connected!"));
