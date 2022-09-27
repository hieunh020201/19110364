const {mygroup} = require('../models/models.student');

function getStudentById(req, res) {
    const ID = Number(req.params.studentID);
    var student;
    mygroup.forEach(element => {
        if (element.id == ID) {
            student = element;
        }
    });
    if (student) {
        res.status(200).json(student);
    } else {
        res.status(400).json({error: 'not valid'});
    }
}

function getStudents(req, res) {
    if (mygroup) {
        res.status(200).json(mygroup);
    } else {
        res.status(400).json({error: 'not valid'});
    }
}

function addStudent(req, res) {
    const ID = Number(req.params.studentID);
    if (ID != req.body.id) {
        res.status(400).json({error: 'not valid'});
    } else if (ID == 19110356 || ID == 19110462 || ID == 19110364) {
        if (!req.body.name) {
            res.status(400).json({
                error:'must have username'
            });
        } else {
            var flag = false;
            const student = {id: req.body.id, name: req.body.name};
            mygroup.forEach(element => {
                if (element.id == student.id) {
                    flag = true;
                }
            });
            if (!flag) {
                mygroup.push(student);
            }
            res.status(200).json(mygroup);
            
        }
    } else {
        res.status(400).json({error: 'not valid'});
    }
}

module.exports = {
    getStudentById,
    getStudents,
    addStudent,
}