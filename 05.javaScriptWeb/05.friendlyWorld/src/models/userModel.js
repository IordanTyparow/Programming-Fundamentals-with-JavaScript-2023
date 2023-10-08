const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        minlength: [10, "The email should be at least 10 characters long!"],
        required: [true, "Email is require!"],
    },
    password: {
        type: String,
        minlength: [4, "The password should be at least 4 characters long!"],
        required: [true, "Password is require!"],
    },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
