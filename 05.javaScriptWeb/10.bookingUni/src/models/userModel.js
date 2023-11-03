const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        validate: {
            validator: function (value) {
                return /[A-Za-z0-9]]/.test(value);
            },
            message: "The email should be only english letters and digits!",
        },
        required: [true, "The email is require!"],
    },
    username: {
        type: String,
        required: [true, "The username is require!"],
    },
    password: {
        type: String,
        validate: {
            validator: function (value) {
                return /[A-Za-z0-9]]/.test(value);
            },
            message: "The password should be only english letters and digits!",
        },
        minlength: [5, "The password should be minimum 5 letters!"],
        required: [true, "The password is require!"],
    },
    bookedHotels: [{ type: mongoose.Types.ObjectId, ref: "hotel" }],
    offeredHotels: [{ type: mongoose.Types.ObjectId, ref: "hotel" }],
});

const User = mongoose.model("user", userSchema);

module.exports = User;
