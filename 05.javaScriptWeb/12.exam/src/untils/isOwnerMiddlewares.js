const offerService = require("../services/offerService");

exports.preloadData = async (req, res, next) => {
    const offer = await offerService.getById(req.params.offerId);

    res.offer = offer;
    next();
};

exports.isOwner = (req, res, next) => {
    if (res.offer._owner == req.user?._id) {
        next();
    } else {
        res.render("404", { pageTitle: "404" });
    }
};

exports.cantBuy = (req, res, next) => {
    if (res.offer._owner == req.user._id) {
        res.render("404", { pageTitle: "404" });
    } else {
        next();
    }
};
