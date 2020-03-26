let mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');
autoIncrement = require('mongoose-auto-increment'); //to set id autoincrement number
autoIncrement.initialize(mongoose.connection);
instructorSchema = new mongoose.Schema({
    // _id:autoIncrement
    fullname: {type:String ,required: true, unique: true},
    mobile: String,
    department: {type:mongoose.Schema.Types.Number,ref:'departments'}
    
    
    
    //foreign key
   
});

instructorSchema.plugin(autoIncrement.plugin, 'instructors');
instructorSchema.plugin(uniqueValidator);
//mapping 
mongoose.model("instructors", instructorSchema); //setting the collection