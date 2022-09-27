const {mygroup} = require('../models/models.student');

function getStudents(req, res) {
    if (mygroup) {
        res.status(200);
        res.write('<html><head><meta charset="UTF-8"></head><body><ul>');
        mygroup.forEach(element => {
            res.write('<li>'+ element.name +'</li>');
        })
        res.write('</ul></body></html>');
        res.end();
    } else {
        res.status(400);
        res.write('<html><head><meta charset="UTF-8"></head><body>');
        res.write('Not valid');
        res.write('</body></html>');
        res.end();
    }
}

function getStudentById(req, res) {
    const ID = Number(req.params.studentID);
    var student;
    mygroup.forEach(element => {
        if (element.id == ID) {
            student = element;
        }
    });
    if (student) {
        res.status(200);
        res.write('<html><head><meta charset="UTF-8"></head><body><ul>');
        res.write('<li>'+ student.name +'</li>');
        res.write('</ul></body></html>');
        res.end();
    } else {
        res.status(400);
        res.write('<html><head><meta charset="UTF-8"></head><body>');
        res.write('Not valid');
        res.write('</body></html>');
        res.end();
    }
}

module.exports = {
    getStudents,
    getStudentById,
}