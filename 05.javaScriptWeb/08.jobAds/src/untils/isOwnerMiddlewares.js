const adService = require("../services/adService");

exports.preloadData = async (req, res, next) => {
    const ad = await adService.getById(req.params.adId);

    res.ad = ad;
    next();
};

exports.isOwner = (req, res, next) => {
    if (res.ad.author == req.user._id) {
        next();
    } else {
        res.render("404");
    }
};
