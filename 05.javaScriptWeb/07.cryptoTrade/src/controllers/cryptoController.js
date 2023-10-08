const router = require("express").Router();

const cryptoService = require("../services/cryptoService");
const { errorHelper } = require("../middlewares/errorHelper");
const { isAuth } = require("../middlewares/authMiddleware");
const { preloadData, isOwner } = require("../untils/isOwnerMiddlewares");

router.get("/catalog", async (req, res) => {
    const allCrypts = await cryptoService.getAllLeaned();

    res.render("crypto/catalog", { allCrypts });
});

router.get("/create", isAuth, (req, res) => {
    res.render("crypto/create");
});

router.post("/create", isAuth, async (req, res) => {
    const cryptoData = { ...req.body, _owner: req.user._id };

    try {
        await cryptoService.create(cryptoData);

        res.redirect("/crypto/catalog");
    } catch (error) {
        res.render("crypto/create", { error: errorHelper(error) });
    }
});

router.get("/:cryptoId/details", async (req, res) => {
    const crypto = await cryptoService.getOneLeaned(req.params.cryptoId);

    const isOwner = req.user && crypto._owner == req.user._id;
    const isBuyed =
        req.user && crypto.buyAcrypto.some((x) => x._id == req.user._id);

    res.render("crypto/details", { ...crypto, isOwner, isBuyed });
});

router.get("/:cryptoId/buy", async (req, res) => {
    const crypto = await cryptoService.getOne(req.params.cryptoId);

    crypto.buyAcrypto.push(req.user._id);

    await crypto.save();

    res.redirect(`/crypto/${req.params.cryptoId}/details`);
});

router.get("/:cryptoId/edit", preloadData, isOwner, async (req, res) => {
    const crypto = await cryptoService.getOneLeaned(req.params.cryptoId);

    res.render("crypto/edit", { ...crypto });
});

router.post("/:cryptoId/edit", preloadData, isOwner, async (req, res) => {
    try {
        await cryptoService.updateOne(req.params.cryptoId, req.body);

        res.redirect(`/crypto/${req.params.cryptoId}/details`);
    } catch (error) {
        res.render("crypto/edit", { ...req.body, error: errorHelper(error) });
    }
});

router.get("/:cryptoId/delete", preloadData, isOwner, async (req, res) => {
    await cryptoService.deleteOne(req.params.cryptoId);

    res.redirect("/crypto/catalog");
});

module.exports = router;
