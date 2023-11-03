const Offer = require("../models/offerModel");

exports.create = (offerData) => Offer.create(offerData);

exports.getAll = () => Offer.find();

exports.getById = (offerId) => Offer.findById(offerId);

exports.updateOne = (offerId, offerData) =>
    Offer.findByIdAndUpdate(offerId, offerData, { runValidators: true });

exports.deleteOne = (offerId) => Offer.findByIdAndDelete(offerId);

exports.searchOffer = ({ searchName, searchType }) => {
    return Offer.find({
        name: { $regex: searchName, $options: "i" },
        type: { $regex: searchType, $options: "i" },
    });
};
