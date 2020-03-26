let express = require("express");
let expressRouter = express.Router() //Router Object
let mongoose = require("mongoose");
require("./../models/instructors")
require("./../models/departments")

let departmentsSchema = mongoose.model("departments"); //Getting the collection

let instructorsSchema = mongoose.model("instructors"); //Getting the collection

// list instructors
expressRouter.get("/list", (request, response, next) => { //get in url

    instructorsSchema.find({}).populate("department").then((data) => {

        response.render("instructors/instructors.ejs", { instructors: data });

    }).catch((error) => { console.log(error + "") });


});
expressRouter.get("/add", (request, response, next) => { //get in url
    departmentsSchema.find({}).then((data) => {
        console.log(data);

        response.render("instructors/addInstructor.ejs", { departments: data });

    }).catch((error) => { console.log(error + "") });


});
expressRouter.post("/add", (request, response, next) => { //get in url
    let newInstructor = new instructorsSchema({
        fullname: request.body.fullname,
        mobile: request.body.mobile,
        department: request.body.department


    });
    newInstructor.save(
        (error) => {
            console.log("error " + error);

        }
    );
    response.redirect("/instructors/list");

});
expressRouter.get("/edit", (request, response, next) => { //get in url

    instructorsSchema.findOne({ _id: request.query.id }).then((data) => {
        departmentsSchema.find({}).then((data2) => {

            response.render("instructors/editInstructor.ejs", { instructors: data, departments: data2 });

        }).catch((error) => { console.log(error + "") });
    }).catch((error) => { console.log(error + "") });


});
expressRouter.post("/edit", (request, response, next) => { //get in url
    response.redirect("/instructors/list")

});
expressRouter.post("/delete/:id", (request, response, next) => { //get in url
    instructorsSchema.findByIdAndDelete(request.params.id).then((data) => {
        response.redirect("/instructors/list");

    }).catch((error) => {
        console.log("error " + error);

    });
    // response.send("success")
});
module.exports = expressRouter