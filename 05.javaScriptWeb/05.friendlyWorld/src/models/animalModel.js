const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [2, "The name should be at least 2 characters long!"],
        required: [true, "name is require!"],
    },
    years: {
        type: String,
        minlength: [1, "The years should be beetween 1 and 100"],
        maxlength: [100, "The years should be beetween 1 and 100"],
        required: [true, "years is require!"],
    },
    kind: {
        type: String,
        minlength: [3, "The kind should be at least 3 characters long!"],
        required: [true, "kind is require!"],
    },
    imageUrl: {
        type: String,
        validate: {
            validator: function (url) {
                return /^http/.test(url);
            },
            message: (props) => "ImageUrl should be start with http or https!",
        },
        required: [true, "imageUrl is require!"],
    },
    needsOf: {
        type: String,
        minlength: [3, "Need should be 3 characters minimum!"],
        maxlength: [20, "Need should be 20 characters maximum!"],
        required: [true, "needsOf is require!"],
    },
    location: {
        type: String,
        minlength: [5, "Location should be 3 characters minimum!"],
        maxlength: [15, "Location should be 20 characters maximum!"],
        required: [true, "location is require!"],
    },
    description: {
        type: String,
        minlength: [5, "Description should be 3 characters minimum!"],
        maxlength: [50, "Description should be 20 characters maximum!"],
        required: [true, "description is require!"],
    },
    donations: [{ type: mongoose.Types.ObjectId, ref: "user" }],
    _owner: { type: mongoose.Types.ObjectId, ref: "user" },
});

const Animal = mongoose.model("animal", animalSchema);

module.exports = Animal;
