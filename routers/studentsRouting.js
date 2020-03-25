let express = require("express");
let expressRouter = express.Router() //Router Object
let mongoose = require("mongoose");
require("./../models/students")
require("./../models/departments")

let studentsSchema = mongoose.model("students"); //Getting the collection
let departmentsSchema = mongoose.model("departments"); //Getting the collection


// list students
expressRouter.get("/list", (request, response, next) => { //get in url

    studentsSchema.find({}).populate("courses", "department").then((data) => {
        console.log(data);

        response.render("students.ejs", { students: data });

    }).catch((error) => { console.log(error + "") });



});
expressRouter.get("/add", (request, response, next) => { //get in url
    departmentsSchema.find({}).then((data) => {
        console.log(data);

        response.render("addStudent.ejs", { departments: data });

    }).catch((error) => { console.log(error + "") });



});
expressRouter.post("/add", (request, response, next) => {
    // response.send("add student")
    response.redirect("/students/list");

});
expressRouter.get("/edit/?:id", (request, response, next) => { //get in url
    response.send(request.params.id)
    next();

});
expressRouter.post("/edit", (request, response, next) => {
    // json
    response.send("edit student")
    next();

});
expressRouter.post("/delete", (request, response, next) => { //get in url
    response.send("delete student")
    next();

});
module.exports = expressRouter