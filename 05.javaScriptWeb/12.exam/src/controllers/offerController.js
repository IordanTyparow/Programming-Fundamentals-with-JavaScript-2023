const router = require("express").Router();

const offerService = require("../services/offerService");

const { isAuth } = require("../middlewares/authMiddleware");
const {
    preloadData,
    isOwner,
    cantBuy,
} = require("../untils/isOwnerMiddlewares");
const { errorHelper } = require("../middlewares/errorHelper");

router.get("/catalog", async (req, res) => {
    const offer = await offerService.getAll().lean();

    res.render("offer/catalog", { pageTitle: "Catalog page", offer });
});

router.get("/create", isAuth, (req, res) => {
    res.render("offer/create", { pageTitle: "Create offer" });
});

router.post("/create", isAuth, async (req, res) => {
    const offerData = { ...req.body, _owner: req.user._id };

    try {
        await offerService.create(offerData);

        res.redirect("/offer/catalog");
    } catch (error) {
        res.render("offer/create", { ...req.body, error: errorHelper(error) });
    }
});

router.get("/:offerId/details", async (req, res) => {
    const offer = await offerService.getById(req.params.offerId).lean();

    const isOwner = req.user && offer._owner == req.user._id;
    const isBuyed = req.user && offer.buyingList.some((x) => x == req.user._id);

    res.render("offer/details", {
        pageTitle: "Details page",
        ...offer,
        isOwner,
        isBuyed,
    });
});

router.get("/:offerId/edit", preloadData, isOwner, async (req, res) => {
    const offer = await offerService.getById(req.params.offerId).lean();

    res.render("offer/edit", { pageTitle: "Edit page", ...offer });
});

router.post("/:offerId/edit", preloadData, isOwner, async (req, res) => {
    try {
        await offerService.updateOne(req.params.offerId, req.body);

        res.redirect(`/offer/${req.params.offerId}/details`);
    } catch (error) {
        res.render("offer/edit", { ...req.body, error: errorHelper(error) });
    }
});

router.get("/:offerId/delete", preloadData, isOwner, async (req, res) => {
    await offerService.deleteOne(req.params.offerId);

    res.redirect("/offer/catalog");
});

router.get("/:offerId/buy", isAuth, preloadData, cantBuy, async (req, res) => {
    const offer = await offerService.getById(req.params.offerId);

    offer.buyingList.push(req.user._id);

    await offer.save();

    res.redirect(`/offer/${req.params.offerId}/details`);
});

module.exports = router;
