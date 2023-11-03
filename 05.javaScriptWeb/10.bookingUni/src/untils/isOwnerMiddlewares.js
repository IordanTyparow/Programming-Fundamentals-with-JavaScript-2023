const hotelService = require("../services/hotelService");

exports.preloadData = async (req, res, next) => {
    const hotel = await hotelService.getById(req.params.hotelId);

    res.hotel = hotel;
    next();
};

exports.isOwner = (req, res, next) => {
    if (res.hotel._owner == req.user._id) {
        next();
    } else {
        res.redirect("/");
    }
};
