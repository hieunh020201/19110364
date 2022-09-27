const express = require('express');
const student = require('../controllers/controllers.studentcontroller');
const message = require('../controllers/controllers.messagecontroller');
const router = express.Router();

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next();
})

router.get('/19110364/:studentID', student.getStudentById);

router.get('/', student.getStudents);

router.post('/19110364/:studentID', student.addStudent);

router.get('/message/', message.getStudents);

router.get('/message/:studentID', message.getStudentById);

module.exports = router;