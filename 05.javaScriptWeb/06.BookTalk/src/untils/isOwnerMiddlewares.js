const bookService = require("../services/bookService");

exports.preloadData = async (req, res, next) => {
    const book = await bookService.getOne(req.params.bookId);

    res.book = book;
    next();
};

exports.isOwner = (req, res, next) => {
    if (res.book._owner == req.user._id) {
        next();
    } else {
        res.render("404");
    }
};
