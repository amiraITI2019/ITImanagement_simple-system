var mongoose = require("mongoose");
autoIncrement = require('mongoose-auto-increment'); //to set id autoincrement number
autoIncrement.initialize(mongoose.connection);
departmentSchema = new mongoose.Schema({
    // _id:autoIncrement
    name: String,
    manager: {type:mongoose.Schema.Types.Number,ref:'instructors'}
    //foreign key
   
});

departmentSchema.plugin(autoIncrement.plugin, 'departments');
//mapping 
mongoose.model("departments", departmentSchema); //setting the collection