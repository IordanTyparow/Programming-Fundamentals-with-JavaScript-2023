const Course = require("../models/courseModel");

exports.create = (courseData) => Course.create(courseData);

exports.getAllSortedAscending = () => Course.find().sort({ createdAt: 1 });

exports.getAllSortedDescending = () => Course.find().sort({ createdAt: -1 });

exports.getById = (courseId) => Course.findById(courseId);

exports.updateOne = (courseId, courseData) =>
    Course.findByIdAndUpdate(courseId, courseData, { runValidators: true });

exports.deleteOne = (courseId) => Course.findByIdAndDelete(courseId);

exports.search = (querySearch) => {
    if (querySearch) {
        return Course.find({ title: { $regex: querySearch, $options: "i" } });
    }
};
