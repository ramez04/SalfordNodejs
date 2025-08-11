const Course = require('../models/Courses');
const bcrypt = require('bcrypt');

const addCourse = async (req, res) => {
    const {
        name, id, description, chapter, lessons, courseLength, tutor, image, price, category, lessonPlan
    } = req.body;
    const newCourse = new Course(
        {
            name, id, description, chapter, lessons, courseLength, tutor, image, price, category, lessonPlan
        }
    );
    try {
        await newCourse.save();
        res.status(201).json({
            message: "Added course successfully",
            course: {
                id: newCourse._id,
            }
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}

const getCourses = async (req, res) => {
    try {
        const courses = await Course.find({});
        res.status(200).json(
                courses
        );
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error
        })
    }
}

module.exports = {
    getCourses, addCourse
}