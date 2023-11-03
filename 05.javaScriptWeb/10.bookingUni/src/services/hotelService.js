const Hotel = require("../models/hotelModel");

exports.createHotel = (hotelData) => Hotel.create(hotelData);

exports.getAllHotelsLeaned = () => Hotel.find().sort({ freeRooms: -1 }).lean();

exports.getById = (hotelId) => Hotel.findById(hotelId);

exports.update = (hotelId, hotelData) =>
    Hotel.findByIdAndUpdate(hotelId, hotelData, { runValidators: true });

exports.deleteOne = (hotelId) => Hotel.findByIdAndDelete(hotelId);
