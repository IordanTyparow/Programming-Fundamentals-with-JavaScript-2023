let mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required!"],
    unique: true,
    validator: /[a-zA-Z0-9]/,
    minLength: 5,
  },
  password: {
    type: String,
    required: [true, "Password is required!"],
    validator: /[a-zA-Z0-9]/,
    minLength: 8,
  },
});

let User = mongoose.model("User", userSchema);

module.exports = User;
