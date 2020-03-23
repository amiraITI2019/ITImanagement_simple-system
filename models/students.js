var mongoose = require("mongoose");
autoIncrement = require('mongoose-auto-increment'); //to set id autoincrement number
autoIncrement.initialize(mongoose.connection);
studentSchema = new mongoose.Schema({
    // _id:autoIncrement
    fullname: String,
    username: String,
    address: {
        city: String,
        street: Number,
        buliding: Number
    },
    courses:[
        {type:mongoose.Schema.Types.Number,ref:'courses'}
    ]    //foreign key
   
});

studentSchema.plugin(autoIncrement.plugin, 'students');
//mapping 
mongoose.model("students", studentSchema); //setting the collection