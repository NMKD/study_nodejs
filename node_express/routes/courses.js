const {Router} = require('express')
const Course = require('../models/course')
const router = Router()

router.get('/', async (req, res) => {
    const courses = await Course.getAll()
    res.render('courses', {
        title: "Список курсов",
        isCourses: true,
        courses
    })
})

router.get('/:id', async (req, res) => {
    const course = await Course.getId(req.params.id)
    // console.log(course)
    res.render('course', {
        layout: 'emty',
        title: `Курс ${course.title}`,
        course
    })
})

module.exports = router