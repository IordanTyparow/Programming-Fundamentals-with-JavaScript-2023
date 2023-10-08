const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "The username is require!"],
        minlength: [5, "The username should be at least five characters long"],
    },
    email: {
        type: String,
        required: [true, "The email is require!"],
        minlength: [10, "The email should be at least ten character long"],
    },
    password: {
        type: String,
        required: [true, "The password is require!"],
        minlength: [4, "The password should be at least four characters long"],
    },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
