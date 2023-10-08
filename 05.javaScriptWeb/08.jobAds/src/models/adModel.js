const mongoose = require("mongoose");

const adSchema = new mongoose.Schema({
    headline: {
        type: String,
        required: [true, "The headline is require!"],
        minlength: [4, "The headline should be 4 minimum characters"],
    },
    location: {
        type: String,
        required: [true, "The location is require!"],
        minlength: [8, "The location should be 8 minimum characters"],
    },
    companyName: {
        type: String,
        required: [true, "The company name is require!"],
        minlength: [3, "The companyName should be 3 minimum characters"],
    },
    companyDescription: {
        type: String,
        required: [true, "The company description is require!"],
        maxlength: [40, "The company description should be 40 maximum characters"],
    },
    author: { type: mongoose.Types.ObjectId, ref: "user" },
    userApplied: [{ type: mongoose.Types.ObjectId, ref: "user" }],
});

const Ad = mongoose.model("ad", adSchema);

module.exports = Ad;
