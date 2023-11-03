const router = require("express").Router();

const hotelService = require("../services/hotelService");
const userService = require("../services/userService");

const { isAuth } = require("../middlewares/authMiddleware");
const { preloadData, isOwner } = require("../untils/isOwnerMiddlewares");
const { errorHelper } = require("../middlewares/errorHelper");

router.get("/create", isAuth, (req, res) => {
    res.render("books/create");
});

router.post("/create", isAuth, async (req, res) => {
    const hotelData = { ...req.body, _owner: req.user._id };

    try {
        await hotelService.createHotel(hotelData);

        res.redirect("/");
    } catch (error) {
        res.render("books/create", { ...req.body, error: errorHelper(error) });
    }
});

router.get("/:hotelId/details", async (req, res) => {
    const hotel = await hotelService.getById(req.params.hotelId).lean();

    const isOwner = req.user && hotel._owner == req.user._id;
    const isBooked =
        req.user && hotel.userBooked.some((x) => x == req.user._id);

    res.render("books/details", { ...hotel, isOwner, isBooked });
});

router.get("/:hotelId/edit", preloadData, isOwner, async (req, res) => {
    const hotel = await hotelService.getById(req.params.hotelId).lean();

    res.render("books/edit", { ...hotel });
});

router.post("/:hotelId/edit", preloadData, isOwner, async (req, res) => {
    console.log(req.body);

    try {
        await hotelService.update(req.params.hotelId, req.body);

        res.redirect(`/hotel/${req.params.hotelId}/details`);
    } catch (error) {
        res.render("books/edit", { ...req.body, error: errorHelper(error) });
    }
});

router.get("/:hotelId/delete", preloadData, isOwner, async (req, res) => {
    await hotelService.deleteOne(req.params.hotelId);

    res.redirect("/");
});

router.get("/:hotelId/book", async (req, res) => {
    const hotel = await hotelService.getById(req.params.hotelId);
    const user = await userService.getUser(req.user._id);

    hotel.userBooked.push(req.user._id);
    user.bookedHotels.push(hotel._id);

    await hotel.save();
    await user.save();

    res.redirect(`/hotel/${req.params.hotelId}/details`);
});

module.exports = router;
