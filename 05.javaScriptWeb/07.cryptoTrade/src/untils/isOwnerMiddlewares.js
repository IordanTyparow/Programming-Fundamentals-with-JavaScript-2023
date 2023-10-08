const cryptoService = require("../services/cryptoService");

exports.preloadData = async (req, res, next) => {
    const crypto = await cryptoService.getOne(req.params.cryptoId);

    res.crypto = crypto;
    next();
};

exports.isOwner = (req, res, next) => {
    if (res.crypto._owner == req.user._id) {
        next();
    } else {
        res.render("404");
    }
};
