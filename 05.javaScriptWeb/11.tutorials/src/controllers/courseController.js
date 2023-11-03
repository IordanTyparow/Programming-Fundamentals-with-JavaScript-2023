const router = require("express").Router();

const courseService = require("../services/courseService");

const { preloadData, isOwner } = require("../untils/isOwnerMiddlewares");
const { isAuth } = require("../middlewares/authMiddleware");
const { errorHelper } = require("../middlewares/errorHelper");

router.get("/create", isAuth, (req, res) => {
    res.render("course/create");
});

router.post("/create", isAuth, async (req, res) => {
    const date = new Date().getFullYear().toString();

    const courseData = {
        ...req.body,
        _owner: req.user._id,
        createdAt: date,
    };

    try {
        await courseService.create(courseData);

        res.redirect("/");
    } catch (error) {
        res.render("course/create", { ...req.body, error: errorHelper(error) });
    }
});

router.get("/:courseId/details", async (req, res) => {
    const course = await courseService.getById(req.params.courseId).lean();

    const isOwner = req.user && course._owner == req.user._id;
    const isRolled =
        req.user && course.usersEnrolled.some((x) => x == req.user._id);

    res.render("course/details", {
        titlePage: "Details page",
        ...course,
        isOwner,
        isRolled,
    });
});

router.get("/:courseId/edit", preloadData, isOwner, async (req, res) => {
    const course = await courseService.getById(req.params.courseId).lean();

    res.render("course/edit", { ...course });
});

router.post("/:courseId/edit", preloadData, isOwner, async (req, res) => {
    try {
        await courseService.updateOne(req.params.courseId, req.body);

        res.redirect(`/course/${req.params.courseId}/details`);
    } catch (error) {}
});

router.get("/:courseId/delete", preloadData, isOwner, async (req, res) => {
    const course = await courseService.deleteOne(req.params.courseId);

    res.redirect("/");
});

router.get("/:courseId/enroll", async (req, res) => {
    const course = await courseService.getById(req.params.courseId);

    course.usersEnrolled.push(req.user._id);

    await course.save();

    res.redirect(`/course/${req.params.courseId}/details`);
});

module.exports = router;
