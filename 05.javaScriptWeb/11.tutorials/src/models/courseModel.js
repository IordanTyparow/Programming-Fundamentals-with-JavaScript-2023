const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        minlength: [4, "The title should be minimum 4 letters"],
        required: [true, "The title is require!"],
    },
    description: {
        type: String,
        maxlength: [50, "The description should be maxmimum 50 letters!"],
        required: [true, "The description is require!"],
    },
    imageUrl: {
        type: String,
        validate: {
            validator: function (value) {
                return /^http/.test(value);
            },
            message: "The imageUrl should be start with http or https!",
        },
        required: [true, "The imageUrl is require!"],
    },
    duration: {
        type: String,
        required: [true, "The duration is require!"],
    },
    createdAt: { type: String },
    _owner: { type: mongoose.Types.ObjectId, ref: "user" },
    usersEnrolled: [{ type: mongoose.Types.ObjectId, ref: "user" }],
});

const Course = mongoose.model("course", courseSchema);

module.exports = Course;
