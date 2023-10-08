const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
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
        minlength: [5, 'The password should be 5 minimum characters']
    },
    description: {
        type: String,
        required: [true, "The description is require!"],
        maxlength: [40, 'The description should be 40 maximum characters'],
    },
    myAds: [{ type: mongoose.Types.ObjectId, ref: "ad" }],
});

const User = mongoose.model("user", userSchema);

module.exports = User;
