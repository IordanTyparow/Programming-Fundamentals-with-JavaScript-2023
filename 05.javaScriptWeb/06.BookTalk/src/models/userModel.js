const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        minlength: [4, "The username should be 4 characters long!"],
        required: [true, "Username is require!"],
    },
    email: {
        type: String,
        minlength: [10, "The email should be 10 characters long!"],
        required: [true, "Email is require!"],
    },
    password: {
        type: String,
        minlength: [3, "The password should be 3 characters long!"],
        required: [true, "Password is require!"],
    },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
