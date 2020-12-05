const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://Podge2020:NebNick2020@gettingstartedcluster.iq7rw.mongodb.net/ToDoListDB?retryWrites=true&w=majority'; 

//variable stores and gives access to MODELS 
var Task = require('./models/ToDoTask.js');
var List = require('./models/ToDo.js'); 

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
    if(err) return console.error(err);
    console.log('Connected to database'); 
}); 

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

db.once('open', function(){
    //your tutorial and new code go here. 
    console.log("We're connected");
   
//create new Task using Task Model 
let task1 = new Task({
    taskName : "Homework", 
    assignee : "Podge", 
    priority : 'High',
    status : false 
});

task1.save(function(err, task){
    if (err) return console.error(err);
    console.log(task); 
}); 

var myList = new List ({
    name : "Podge's List", 
    items : [
        {
            item : item1._id
        }
    ], 
}); 

myList.save(); //can add callback error like task1 example above 

});