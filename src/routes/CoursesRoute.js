const express = require('express');
const {getCourses , addCourse} = require('../controllers/CourseController')

const router = express.Router();

router.get('/getAll' , getCourses);
router.post('/addCourse' , addCourse);

module.exports = router;
