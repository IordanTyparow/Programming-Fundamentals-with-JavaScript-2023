const router = require("express").Router();

const courseService = require("../services/courseService");

router.get("/", async (req, res) => {
    if (req.user) {
        let courses;

        if (req.query.search) {
            courses = await courseService.search(req.query.search).lean();

            res.render("home/user-home", { titlePage: "Home page", courses });
        } else {
            courses = await courseService.getAllSortedAscending().lean();

            res.render("home/user-home", { titlePage: "Home page", courses });
        }
    } else {
        const coursesdescending = await courseService
            .getAllSortedDescending()
            .lean();

        res.render("home/guest-home", { coursesdescending });
    }
});

router.get("/tutorials", async (req, res) => {
    const coursesdescending = await courseService
        .getAllSortedDescending()
        .lean();

    res.render("home/guest-home", { coursesdescending });
});

module.exports = router;
