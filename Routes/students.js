const router = require('express').Router();
const studentsModel = require('../models/studentsModel');

// Create
router.post('/', async function (req, res) {
    await studentsModel.create(req.body);
    res.send("Student Added Successfully");
});

// Read
router.get('/', async function (req, res) {
    const students = await studentsModel.find();
    res.json(students);
});

// Update
router.put('/', async function (req, res) {
    await studentsModel.findByIdAndUpdate(req.query.id, {$set: req.body});
    res.send("Data Updated Successfully"); 
});

// Delete
router.delete('/', async function (req, res) {
    await studentsModel.findByIdAndDelete(req.query.id);
    res.send("Data Deleted Successfully");
});

module.exports = router;