const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [10, "The name should be minimum 10 letters long!"],
        required: [true, "The name is require!"],
    },
    type: {
        type: String,
        minlength: [2, "The type should be minimum 2 letters long!"],
        required: [true, "The type is require!"],
    },
    damages: {
        type: String,
        minlength: [10, "The damages should be minimum 10 letters long!"],
        required: [true, "The damages is require!"],
    },
    imageUrl: {
        type: String,
        validate: {
            validator: function (value) {
                return /^http/.test(value);
            },
            message: "The image Url should be start with http or https!",
        },
        required: [true, "The imageUrl is require!"],
    },
    description: {
        type: String,
        minlength: [10, "The description should be minimum 10 letters long!"],
        maxlength: [200, "The description should be maximum 200 letters long!"],
        required: [true, "The description is require!"],
    },
    productionYear: {
        type: Number,
        min: [1900, "The production should be between 1900 and 2023."],
        max: [2023, "The production should be between 1900 and 2023."],
        required: [true, "The productionYear is require!"],
    },
    exploitationYear: {
        type: Number,
        validate: {
            validator: function (value) {
                return value > 0;
            },
            message: "The exploitation year should be a positive number!",
        },
        required: [true, "The exploitationYear is require!"],
    },
    price: {
        type: Number,
        validate: {
            validator: function (value) {
                return value > 0;
            },
            message: "The price year should be a positive number!",
        },
        required: [true, "The price is require!"],
    },
    _owner: { type: mongoose.Types.ObjectId, ref: "user" },
    buyingList: [{ type: mongoose.Types.ObjectId, ref: "user" }],
});

const Offer = mongoose.model("offer", offerSchema);

module.exports = Offer;
