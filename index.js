const express = require('express');
const app = express();
const studentsRoutes = require('./Routes/students');
const mongoose = require('mongoose');

app.use(express.json());

app.use('/api/students', studentsRoutes);


app.get("/", (req, res)=>{
    res.send("Hi there");
})

mongoose.connect('mongodb+srv://mdanish73:Danish-73@students.x5aq73n.mongodb.net/students?retryWrites=true&w=majority').then((res) => {
    console.log("Database connection established");
}).catch((error) => {
    console.error(error.message);
});

var port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server is running successfully...');
});