var mongoose = require("mongoose");
autoIncrement = require('mongoose-auto-increment'); //to set id autoincrement number
autoIncrement.initialize(mongoose.connection);
var uniqueValidator = require('mongoose-unique-validator');

studentSchema = new mongoose.Schema({
    // _id:autoIncrement
    fullname: {type:String ,required: true, unique: true},
    username: String,
    address: {
        city: String,
        street: String,
        building: Number
    },
    courses: [
        { type: mongoose.Schema.Types.Number, ref: 'courses' }
    ], //foreign key,
    department: { type: mongoose.Schema.Types.Number, ref: 'departments' }

});

studentSchema.plugin(autoIncrement.plugin, 'students');
studentSchema.plugin(uniqueValidator);

//mapping 
mongoose.model("students", studentSchema); //setting the collection