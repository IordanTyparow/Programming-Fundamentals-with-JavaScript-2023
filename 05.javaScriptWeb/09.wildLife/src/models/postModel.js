const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "The title is require!"],
        minlength: [6, "The title should be minimum 3 characters long"],
    },
    keyWord: {
        type: String,
        required: [true, "The keyword is require!"],
        maxlength: [6, "The keyword should be minimum 6 characters long"],
    },
    location: {
        type: String,
        required: [true, "The location is require!"],
        maxlength: [15, "The location should be maximum 15 characters long"],
    },
    dateOfCreation: {
        type: String,
        required: [true, "The date of creation is require!"],
        maxlength: [
            10,
            "The date of creation should be maximum 10 characters long",
        ],
    },
    imageUrl: {
        type: String,
        required: [true, "The image is require!"],
        validate: {
            validator: function (value) {
                return /^http/.test(value);
            },
            message: "The imageUrl should be start with http or https!",
        },
    },
    description: {
        type: String,
        required: [true, "The description is require!"],
        minlength: [8, "The description should be minimum 8 characters long"],
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: "user",
    },
    votes: [{ type: mongoose.Types.ObjectId, ref: "user" }],
    ratingOnPost: {
        type: Number,
        default: 0,
    },
});

const Post = mongoose.model("post", postSchema);

module.exports = Post;
