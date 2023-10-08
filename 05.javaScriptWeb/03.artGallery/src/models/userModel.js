const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is require!"],
    maxlength: 4,
  },
  password: {
    type: String,
    required: [true, "Password is require!"],
    minlength: 3,
  },
  address: {
    type: String,
    required: [true, "Address is require!"],
    maxlength: 20,
  },
  userShared: [
    {
      type: mongoose.Types.ObjectId,
      ref: "publication",
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
