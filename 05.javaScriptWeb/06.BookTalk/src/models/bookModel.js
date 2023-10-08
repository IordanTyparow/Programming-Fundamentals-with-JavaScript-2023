const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: [2, "The title should be 2 characters long!"],
        required: [true, "Title is require!"],
    },
    author: {
        type: String,
        minlength: [5, "The author should be 5 characters long!"],
        required: [true, "Author is require!"],
    },
    imageUrl: {
        type: String,
        validate:{
            validator: function(value) {
                return /^http/.test(value);
            },
            message: (props) => 'imageUrl should be start with http ot https!'
        },
        required: [true, "ImageUrl is require!"],
    },
    bookReview: {
        type: String,
        minlength: [10, "The book review should be 10 characters long!"],
        required: [true, "Book Review is require!"],
    },
    genre: {
        type: String,
        minlength: [3, "The genre should be 3 characters long!"],
        required: [true, "Genre is require!"],
    },
    stars: {
        type: String,
        required: [true, "Genre is require!"],
        minlength: 1,
        maxlength: 5,
    },
    wishingList: [{ type: mongoose.Types.ObjectId, ref: "user" }],
    _owner: { type: mongoose.Types.ObjectId, ref: "user" },
});

const Book = mongoose.model("book", bookSchema);

module.exports = Book;
