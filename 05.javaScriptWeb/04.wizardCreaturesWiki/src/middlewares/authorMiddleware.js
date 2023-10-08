const creatureService = require("../services/creatureService");

exports.preloadData = async (req, res, next) => {
  const creature = await creatureService.getById(req.params.creatureId);

  req.creature = creature;

  next();
};

exports.verifyAuthor = (req, res, next) => {
  if (req.creature.owner != req.user._id) {
    return res.render("404");
  }

  next();
};
