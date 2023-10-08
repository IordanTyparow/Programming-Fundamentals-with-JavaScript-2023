const router = require("express").Router();

const { isAuth } = require("../middlewares/authMiddleware");
const adService = require("../services/adService");
const userService = require("../services/userService");
const { errorHelper } = require("../middlewares/errorHelper");
const { preloadData, isOwner } = require("../untils/isOwnerMiddlewares");

router.get("/catalog", async (req, res) => {
    const allAds = await adService.getAllLeaned();

    res.render("ad/all-ads", { allAds });
});

router.get("/create", isAuth, (req, res) => {
    res.render("ad/create");
});

router.post("/create", isAuth, async (req, res) => {
    const adData = { ...req.body, author: req.user._id };
    const user = await userService.getById(req.user._id);

    try {
        const ad = await adService.create(adData);

        user.myAds.push(ad._id);
        await user.save();

        res.redirect("/ad/catalog");
    } catch (error) {
        res.render("ad/create", { error: errorHelper(error) });
    }
});

router.get("/:adId/details", async (req, res) => {
    const ad = await adService.getByIdLeaned(req.params.adId);

    const isOwner = req.user && ad.author._id == req.user._id;
    const isApplied = req.user && ad.userApplied.some((x) => x == req.user._id);
    const allApplied = ad.userApplied.length;

    res.render("ad/details", { ...ad, isOwner, isApplied, allApplied });
});

router.get("/:adId/applie", async (req, res) => {
    const ad = await adService.getById(req.params.adId);

    ad.userApplied.push(req.user._id);

    await ad.save();

    res.redirect(`/ad/${req.params.adId}/details`);
});

router.get("/:adId/edit", preloadData, isOwner, async (req, res) => {
    const ad = await adService.getByIdLeaned(req.params.adId);

    res.render("ad/edit", { ...ad });
});

router.post("/:adId/edit", preloadData, isOwner, async (req, res) => {
    try {
        await adService.edit(req.params.adId, req.body);

        res.redirect(`/ad/${req.params.adId}/details`);
    } catch (error) {
        res.render("ad/edit", { ...req.body, error: errorHelper(error) });
    }
});

router.get("/:adId/delete", preloadData, isOwner, async (req, res) => {
    await adService.delete(req.params.adId);

    res.redirect("/ad/catalog");
});

module.exports = router;
