let mongoose = require("mongoose");
autoIncrement = require('mongoose-auto-increment'); //to set id autoincrement number
autoIncrement.initialize(mongoose.connection);
instructorSchema = new mongoose.Schema({
    // _id:autoIncrement
    fullname: String,
    mobile: String,
    department: {type:mongoose.Schema.Types.Number,ref:'departments'}
    
    
    
    //foreign key
   
});

instructorSchema.plugin(autoIncrement.plugin, 'instructors');
//mapping 
mongoose.model("instructors", instructorSchema); //setting the collection