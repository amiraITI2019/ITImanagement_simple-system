let mongoose = require("mongoose");
autoIncrement = require('mongoose-auto-increment'); //to set id autoincrement number
autoIncrement.initialize(mongoose.connection);
var uniqueValidator = require('mongoose-unique-validator');
 
courseSchema = new mongoose.Schema({
    // _id:autoIncrement
    name: {type:String, required: true, unique: true},
    lectureHours: Number,
    labHours:Number

  
});

courseSchema.plugin(autoIncrement.plugin, 'courses');
courseSchema.plugin(uniqueValidator);

//mapping 
mongoose.model("courses", courseSchema); //setting the collection
console.log(mongoose.connection);
