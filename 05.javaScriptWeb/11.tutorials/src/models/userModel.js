const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [true, "The username is taken!"],
        required: [true, "The username is require!"],
        minlength: 5,
    },
    password: {
        type: String,
        minlength: 5,
        required: [true, "The password is require!"],
    },
    enrolledCourses: [{ type: mongoose.Types.ObjectId, ref: "course" }],
});

const User = mongoose.model("user", userSchema);

module.exports = User;
