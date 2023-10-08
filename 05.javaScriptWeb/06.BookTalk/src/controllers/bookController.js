const router = require("express").Router();

const bookService = require("../services/bookService");
const { errorHelper } = require("../middlewares/errorHelper");
const { preloadData, isOwner } = require("../untils/isOwnerMiddlewares");

router.get("/catalog", async (req, res) => {
    const books = await bookService.getAllLeaned();

    res.render("books/catalog", { books });
});

router.get("/create", (req, res) => {
    res.render("books/create");
});

router.post("/create", async (req, res) => {
    const bookData = { ...req.body, _owner: req.user._id };

    try {
        await bookService.create(bookData);
        res.redirect("/book/catalog");
    } catch (error) {
        res.render("books/create", { error: errorHelper(error) });
    }
});

router.get("/:bookId/details", async (req, res) => {
    const book = await bookService.getOneLeaned(req.params.bookId);

    const isOwner = book._owner == req.user._id;
    const isWished =
        req.user && book.wishingList.some((x) => x._id == req.user._id);

    res.render("books/details", { ...book, isOwner, isWished });
});

router.get("/:bookId/wish", async (req, res) => {
    const book = await bookService.getOne(req.params.bookId);

    book.wishingList.push(req.user._id);

    await book.save();

    res.redirect(`/book/${req.params.bookId}/details`);
});

router.get("/:bookId/edit", preloadData, isOwner, async (req, res) => {
    const book = await bookService.getOneLeaned(req.params.bookId);

    res.render("books/edit", { ...book });
});

router.post("/:bookId/edit", async (req, res) => {
    try {
        await bookService.updateOne(req.params.bookId, req.body);

        res.redirect(`/book/${req.params.bookId}/details`);
    } catch (error) {
        res.render("books/edit", { ...req.body, error: errorHelper(error) });
    }
});

router.get("/:bookId/delete", preloadData, isOwner, async (req, res) => {
    await bookService.deleteOne(req.params.bookId);

    res.redirect("/book/catalog");
});

module.exports = router;
