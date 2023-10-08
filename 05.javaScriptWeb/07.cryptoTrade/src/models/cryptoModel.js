const mongoose = require("mongoose");

const cryptoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "The name is require!"],
        minlength: [2, "The Name should be at least two characters"],
    },
    imageUrl: {
        type: String,
        required: [true, "The image is require!"],
        validate: {
            validator: function (value) {
                return /^http/.test(value);
            },
            message: "The Crypto Image should start with http or https",
        },
    },
    price: {
        type: String,
        required: [true, "The price is require!"],
        validate: {
            validator: function (value) {
                return value > 0;
            },
            message: "The Price should be a positive number",
        },
    },
    cryptoDescription: {
        type: String,
        required: [true, "The description is require!"],
        minlength: [
            10,
            "The Description should be a minimum of 10 characters long.",
        ],
    },
    paymentMethod: {
        type: String,
        required: [true, "The payment method is require!"],
        enum: ["crypto-wallet", "credit-card", "debit-card", "paypal"],
    },
    buyAcrypto: [{ type: mongoose.Types.ObjectId, ref: "user" }],
    _owner: { type: mongoose.Types.ObjectId, ref: "user" },
});

const Crypto = mongoose.model("crypto", cryptoSchema);

module.exports = Crypto;
