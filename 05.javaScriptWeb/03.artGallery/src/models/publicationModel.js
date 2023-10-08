const mongoose = require("mongoose");

const publicationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "The title is require!"],
    minlength: [
      6,
      "The length of the title should be minimum 6 characters long.",
    ],
  },
  paintingTechnique: {
    type: String,
    required: [true, "The paintingTechnique is require!"],
    minlength: [
      15,
      "The length of the Painting technique should be minimum 15 characters long.",
    ],
  },
  artPicture: {
    type: String,
    required: [true, "The artPicture is require!"],
    validate: {
      validator: function (url) {
        return /^http/.test(url);
      },
      message: (x) => `The ${x.value} is not a valid Url!`,
    },
  },
  certificate: {
    type: String,
    enum: ["Yes", "No"],
    required: [true, "Certificate is require!"],
  },
  author: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  usersShared: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Publication = mongoose.model("publication", publicationSchema);

module.exports = Publication;
