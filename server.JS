const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://Podge2020:NebNick2020@gettingstartedcluster.iq7rw.mongodb.net/ToDoListDB?retryWrites=true&w=majority'; 

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
    if(err) return console.error(err);
    console.log('Connected to database'); 
}); 

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

db.once('open', function(){
    //your tutorial and new code go here. 
    console.log("We're connected");
    //schema
}); 