const Student = require('../models/Student');

const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find({ isDeleted: false });
        res.json(students);
    } catch (error) {
        console.error('Error fetching students', error);
        res.status(500).json({error: 'Internal Server Error'});
    }
};

const findStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student || student.isDeleted === true) {
            return res.status(400).json({message: `Employee ID ${req.params.id} not found`});
        }
        res.json(student);
    } catch (e) {
        console.log(e);
        res.status(500).json({error: 'Server Error'})
    }
}

const createNewStudent = async (req, res) => {
    try {
        const {stname, course, fee} = req.body;
        if (!stname || !course || !fee === undefined) {
            return res.status(400).json({'message': 'name/course/fee required.'});
        }
        const newStudent = new Student(
            {
                stname,
                course,
                fee,
            }
        );

        await newStudent.save();
        return res.status(201).json({'message': 'Created successfully !!'});
    } catch (e) {
        console.log(e);
        res.status(500).json({error: 'server error'});
    }
}

const updateStudentById = async (req, res) => {
    try{
        const student = await Student.findById(req.params.id);
        if(!student || student.isDeleted === true){
            return res.status(400).json({'message': 'Student not found'});
        }

        student.set(req.body);

        await student.save();

        res.status(200).json(student);

    }catch (e){
        console.log(e);
        res.status(500).json({error : 'Server error'})
    }
}

const deleteStudent = async (req, res) => {
    try{
        // const result = await Student.deleteOne({ _id: req.params.id }); //Xoá khỏi DB
        const student = await Student.findById(req.params.id);
        if(!student || student.isDeleted === true){
            return res.status(400).json({'message': 'Student not found!!'})
        }
        student.isDeleted = true;
        await student.save();
        res.status(200).json({'message': 'Deleted successfully'})
    }catch (e){
        console.log(e);
        res.status(500).json({error: 'Server error!!'})
    }
}

module.exports = {
    getAllStudents,
    findStudentById,
    createNewStudent,
    deleteStudent,
    updateStudentById,
}

