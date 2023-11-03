const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [4, "The name should be 4 minimum letters!"],
        required: [true, "The name is require!"],
    },
    city: {
        type: String,
        minlength: [3, "The city should be 3 minimum letters!"],
        required: [true, "The city is require!"],
    },
    imgUrl: {
        type: String,
        validate: {
            validator: function (value) {
                return /^http/.test(value);
            },
            message: "The imageUrl should be start with http or https!",
        },
        required: [true, "The imageUrl is require!"],
    },
    freeRooms: {
        type: Number,
        min: [1, "Free rooms should be between 1 to 100"],
        max: [100, "Free rooms should be between 1 to 100"],
        required: [true, "The free rooms is require!"],
    },
    userBooked: [{ type: mongoose.Types.ObjectId, ref: "user" }],
    _owner: { type: mongoose.Types.ObjectId, ref: "user" },
});

const Hotel = mongoose.model("hotel", hotelSchema);

module.exports = Hotel;
