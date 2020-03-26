let express = require("express");
let expressRouter = express.Router() //Router Object
let mongoose = require("mongoose");
require("./../models/departments")
let departmentsSchema = mongoose.model("departments"); //Getting the collection
require("./../models/instructors")
let instructorsSchema = mongoose.model("instructors"); //Getting the collection


// list students
expressRouter.get("/list", (request, response, next) => { //get in url
    departmentsSchema.find({}).populate("manager").then((data) => {
        console.log(data);

        response.render("departments/departments.ejs", { departments: data });

    }).catch((error) => { console.log(error + "") });


});
expressRouter.get("/add", (request, response, next) => { //get in url
    instructorsSchema.find({}).then((data) => {
        response.render("departments/addDepartment.ejs", { instructors: data });

    }).catch((error) => {
        console.log("" + error);


    });
});
expressRouter.post("/add", (request, response, next) => { //get in url
    let newDepartment = new departmentsSchema(
        request.body,
    );
    newDepartment.save(
        (error) => {
            // console.log("error " + error);

        }
    );
    response.redirect("/departments/list");
});
expressRouter.get("/edit", (request, response, next) => { //get in url
    instructorsSchema.find({}).then((data) => {
        departmentsSchema.findOne({ _id: request.query.id }).then((data2) => {


            response.render("departments/editDepartment.ejs", { instructors: data, department: data2 });
        }).catch((error) => {
            console.log(error);

        });
    }).catch((error) => {
        console.log("" + error);


    });

});
expressRouter.post("/edit", (request, response, next) => { //get in url
    departmentsSchema.updateOne({ _id: request.body._id }, { $set: request.body }).then((data => {
        response.redirect("/departments/list");

    })).catch((error) => { console.log(error + "") });

});
expressRouter.post("/delete", (request, response, next) => { //get in url
    departmentsSchema.findByIdAndDelete({
        _id: request.body._id
    }).then((data) => {
        console.log(data);
        
        response.redirect("/departments/list");
    }).catch((error) => {
        console.log("error " + error);

    });


});
module.exports = expressRouter