const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        minlength: [3, "The username should be minimum 3 letters long!"],
        required: [true, "The username is require!"],
    },
    email: {
        type: String,
        minlength: [10, "The email should be minimum 10 letters long!"],
        required: [true, "The email is require!"],
    },
    password: {
        type: String,
        minlength: [4, "The email should be minimum 4 letters long!"],
        required: [true, "The password is require!"],
    },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
