const courseService = require("../services/courseService");

exports.preloadData = async (req, res, next) => {
    const course = await courseService.getById(req.params.courseId);

    res.course = course;
    next();
};

exports.isOwner = (req, res, next) => {
    if (res.course._owner == req.user._id) {
        next();
    } else {
        res.redirect("/");
    }
};
