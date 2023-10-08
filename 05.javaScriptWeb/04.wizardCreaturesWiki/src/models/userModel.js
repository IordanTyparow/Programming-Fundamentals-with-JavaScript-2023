const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "firstName is require!"],
    minlength: [3, "The firstName must be have 3 characters long"],
  },
  lastName: {
    type: String,
    required: [true, "Lastname is require!"],
    minlength: [3, "The lastName must be have 3 characters long"],
  },
  email: {
    type: String,
    required: [true, "Email is require!"],
    minlength: [10, "The email must be have 10 characters long"],
  },
  password: {
    type: String,
    required: [true, "Password is require!"],
    minlength: [4, "The password must be have 4 characters long"],
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
