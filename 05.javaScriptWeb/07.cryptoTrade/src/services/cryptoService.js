const Crypto = require("../models/cryptoModel");

exports.create = (cryptoData) => Crypto.create(cryptoData);

exports.getAllLeaned = () => Crypto.find().lean();

exports.getOneLeaned = (cryptoId) => Crypto.findById(cryptoId).lean();

exports.getOne = (cryptoId) => Crypto.findById(cryptoId);

exports.updateOne = (cryptoId, cryptoData) =>
    Crypto.findByIdAndUpdate(cryptoId, cryptoData, { runValidators: true });

exports.deleteOne = (cryptoId) => Crypto.findByIdAndDelete(cryptoId);

exports.search = (searchData) =>
    Crypto.find({
        name: searchData.name,
        paymentMethod: searchData.paymentMethod,
    });

exports.getThreeLasted3added = () => Crypto.find().sort({ _id: -1 }).limit(3);;

