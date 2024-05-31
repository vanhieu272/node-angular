const express = require('express');
const router = express.Router();

const studentController = require('../app/controllers/StudentsController');

router.get('/findAll',studentController.getAllStudents);
router.get('/find/:id', studentController.findStudentById);
router.post('/create', studentController.createNewStudent);
router.delete('/delete/:id', studentController.deleteStudent);
router.patch('/update/:id', studentController.updateStudentById);

module.exports = router;