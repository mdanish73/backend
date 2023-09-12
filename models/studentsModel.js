const mongoose = require('mongoose');

const studentsModel = mongoose.model('Students', new mongoose.Schema({
    fullName: String,
    fatherName: String,
    age: Number,
    gender: String
}));

module.exports = studentsModel;