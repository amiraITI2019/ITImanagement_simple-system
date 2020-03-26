var mongoose = require("mongoose");
autoIncrement = require('mongoose-auto-increment'); //to set id autoincrement number
var uniqueValidator = require('mongoose-unique-validator');
autoIncrement.initialize(mongoose.connection);
departmentSchema = new mongoose.Schema({
    // _id:autoIncrement
    name: {type:String ,required: true, unique: true},
    manager: {type:mongoose.Schema.Types.Number,ref:'instructors'}
    //foreign key
   
});

departmentSchema.plugin(autoIncrement.plugin, 'departments');
departmentSchema.plugin(uniqueValidator);
//mapping 
mongoose.model("departments", departmentSchema); //setting the collection