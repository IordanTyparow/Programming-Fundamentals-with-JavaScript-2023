const Book = require("../models/bookModel");

exports.create = (bookData) => Book.create(bookData);

exports.getAllLeaned = () => Book.find().lean();

exports.getOneLeaned = (bookId) => Book.findById(bookId).lean();

exports.getOne = (bookId) => Book.findById(bookId);

exports.updateOne = (bookId, bookData) =>
    Book.findByIdAndUpdate(bookId, bookData, { runValidators: true });

exports.deleteOne = (bookId) => Book.findByIdAndDelete(bookId);

exports.getUserBooks = (userId) => Book.find({ _owner: userId }).lean();
