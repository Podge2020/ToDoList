//creates interface to mongoose module built in from node js 
const mongoose = require('mongoose');

//creating a variable that can be reused to make mongoose schema possible 
const Schema = mongoose.Schema;  

//creates NEW schema 
//create TASK schema 
const taskSchema = new Schema({
    taskName : String, 
    assignee : String, 
    priority : {type: String, enum: ['High', 'Medium', 'Low']}, 
    status : Boolean, 
    }, 

//option as argument here to add Time Stamp from Mongoose
    { timestamps : true }
);

module.exports = mongoose.model("Task", taskSchema);