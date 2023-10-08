const publicationService = require("../services/publicationService");
const { errorHelper } = require("../middlewares/errorHelper");

exports.preloadPublication = async (req, res, next) => {
  const publication = await publicationService.getOneLeaned(
    req.params.publicationId
  );

  req.publication = publication;

  next();
};

exports.verifyAuthor = async (req, res, next) => {
  if (req.publication.author != req.user._id) {
    return res.render("404");
  }

  next();
};
