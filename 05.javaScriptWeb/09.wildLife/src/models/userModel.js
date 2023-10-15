const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "The first name is require!"],
        minlength: [3, "The first name should be minimum 3 characters long"],
    },
    lastName: {
        type: String,
        required: [true, "The last name is require!"],
        minlength: [5, "The last name should be minimum 3 characters long"],
    },
    email: {
        type: String,
        required: [true, "The email is require!"],
        validate: {
            validator: function (value) {
                return /^[A-Za-z]+@[A-Za-z]+\.[A-Za-z]+$/.test(value);
            },
            message: "The email is not valid!",
        },
    },
    password: {
        type: String,
        required: [true, "The password is require!"],
        minlength: [4, "The password should be minimum 3 characters long"],
    },
    myPosts: [{ type: mongoose.Types.ObjectId, ref: "post" }],
});

const User = mongoose.model("user", userSchema);

module.exports = User;
