const Student = require('../models/studentModel');

const getAllStudents = async (request, result) => {
    try {
        const students = await Student.find();
        result.json(students);
    }
    catch (error) {
        result.status(500).json({ message: error.message });
    }
}

// Get one student by ID
const getStudentById = async (req, res) => {
    try {
      const student = await Student.findById(req.params.id);
      if (!student) return res.status(404).json({ message: 'Student not found' });
      res.json(student);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new student
  const createStudent = async (req, res) => {
    try {
      const student = new Student(req.body);
      const savedStudent = await student.save();
      res.status(201).json(savedStudent);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update an existing student
  const updateStudent = async (req, res) => {
    try {
      const updatedStudent = await Student.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
      if (!updatedStudent) return res.status(404).json({ message: 'Student not found' });
      res.json(updatedStudent);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a student
  const deleteStudent = async (req, res) => {
    try {
      const deletedStudent = await Student.findByIdAndDelete(req.params.id);
      if (!deletedStudent) return res.status(404).json({ message: 'Student not found' });
      res.json({ message: 'Student deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  module.exports = {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
  };