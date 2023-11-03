const router = require("express").Router();

const hotelService = require("../services/hotelService");
const userService = require("../services/userService");

const { isAuth } = require("../middlewares/authMiddleware");

router.get("/", async (req, res) => {
    const hotels = await hotelService.getAllHotelsLeaned();

    res.render("home/home", { hotels });
});

router.get("/profile", isAuth, async (req, res) => {
    const user = await userService.getUser(req.user._id).lean();

    const userReservation =
        user.bookedHotels.join(", ") || "User dont have reservation";

    res.render("profile", { user, userReservation });
});

module.exports = router;
