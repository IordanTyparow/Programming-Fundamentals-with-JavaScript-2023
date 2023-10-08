const animalService = require("../services/animalService");

exports.preloadData = async (req, res, next) => {
    const animal = await animalService.getOne(req.params.animalId);

    res.animal = animal;
    next();
};

exports.isOwner = (req, res, next) => {
    if (res.animal._owner == req.user._id) {
        next();
    } else {
        res.render("404");
    }
};
