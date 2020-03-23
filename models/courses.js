let mongoose = require("mongoose");
autoIncrement = require('mongoose-auto-increment'); //to set id autoincrement number
autoIncrement.initialize(mongoose.connection);

courseSchema = new mongoose.Schema({
    // _id:autoIncrement
    name: String,
    lectureHours: Number,
    labHours:Number

  
});

courseSchema.plugin(autoIncrement.plugin, 'courses');
//mapping 
mongoose.model("courses", courseSchema); //setting the collection
console.log(mongoose.connection);
