//creates interface to mongoose module built in from node js 
const mongoose = require('mongoose');

//creating a variable that can be reused to make mongoose schema possible 
const Schema = mongoose.Schema;  

//create LIST schema 
const listSchema = new Schema ({
    name : String, 
    task : [{
        type : Schema.Types.ObjectId,
        ref : "Task" 
    }], 
}); 

module.exports = mongoose.model("List", listSchema); 


