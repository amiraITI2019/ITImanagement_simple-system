let express = require("express");
let expressRouter = express.Router() //Router Object
let mongoose = require("mongoose");
require("./../models/students")
require("./../models/departments")
require("./../models/courses")

let studentsSchema = mongoose.model("students"); //Getting the collection
let departmentsSchema = mongoose.model("departments"); //Getting the collection
let coursessSchema = mongoose.model("courses"); //Getting the collection


// list students
expressRouter.get("/list", (request, response, next) => { //get in url

    studentsSchema.find({}).populate("department").then((data) => {
        console.log(data);

        response.render("students/students.ejs", { students: data });

    }).catch((error) => { console.log(error + "") });



});
expressRouter.get("/add", (request, response, next) => { //get in url
    departmentsSchema.find({}).then((data) => {
        coursessSchema.find({}).then((data2) => {
            response.render("students/addStudent.ejs", { departments: data, courses: data2 });

        }).catch((error) => { console.log(error + "") });
    }).catch((error) => { console.log(error + "") });



});
expressRouter.post("/add", (request, response, next) => {
    let newStudent = new studentsSchema({
        fullname: request.body.fullname,
        username: request.body.username,
        mobile: request.body.mobile,
        address: {
            city: request.body.city,
            street: request.body.street,
            building: request.body.building

        },
        department: request.body.department,
        courses: request.body.courses


    });
    newStudent.save(
        (error) => {
            console.log("error " + error);

        }
    );


    response.redirect("/students/list");

});
expressRouter.get("/edit", (request, response, next) => { //get in url

    studentsSchema.findOne({ _id: request.query.id }).then((student) => {
        departmentsSchema.find({}).then((data) => {
            coursessSchema.find({}).then((data2) => {
                response.render("students/editStudent.ejs", { student: student, departments: data, courses: data2 });

            }).catch((error) => { console.log(error + "") });
        }).catch((error) => { console.log(error + "") });
    }).catch((error) => { console.log(error + "") });





});
expressRouter.post("/edit", (request, response, next) => {
    next();

});
expressRouter.post("/delete", (request, response, next) => { //get in url
    response.send("delete student")
    next();

});
module.exports = expressRouter