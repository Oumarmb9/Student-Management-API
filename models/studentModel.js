const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    course: { type: String, required: true },
    enrolledDate: { type: Date, default: Date.now }
  });
  
  const Student = mongoose.model('Student', studentSchema);
  
  module.exports = Student;