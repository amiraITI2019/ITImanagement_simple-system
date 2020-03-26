let express = require("express");
let expressRouter = express.Router() //Router Object
let mongoose = require("mongoose");
require("./../models/courses")

let coursessSchema = mongoose.model("courses"); //Getting the collection


// list courses
expressRouter.get("/list", (request, response, next) => { //get in url

    coursessSchema.find({}).then((data) => {

        response.render("courses/courses.ejs", { courses: data });

    }).catch((error) => { console.log(error + "") });


});
expressRouter.get("/add", (request, response, next) => { //get in url

    response.render("courses/addCourse.ejs");



});
expressRouter.post("/add", (request, response, next) => { //get in url
    // response.send("add instructor")
    let newCourse = new coursessSchema({
        name: request.body.Coursename,
        lectureHours: request.body.lectureHours,
        labHours: request.body.labHours


    });
    newCourse.save(
        (error) => {
            console.log("error " + error);

        }
    );
    response.redirect("/courses/list");
});
expressRouter.get("/edit", (request, response, next) => { //get in url

    coursessSchema.findOne({ _id: request.query.id }).then((data) => {
        response.render("courses/editCourse.ejs", { course: data });
    }).catch((error) => { console.log(error + "") });


});
expressRouter.post("/edit", (request, response, next) => { //get in url
    coursessSchema.updateOne({ _id: request.body._id }, { $set: request.body }).then((data => {
        response.redirect("/courses/list");

    })).catch((error) => { console.log(error + "") });
});
expressRouter.post("/delete", (request, response, next) => { //get in url
    coursessSchema.findByIdAndDelete({
        _id: request.body._id
    }).then((data) => {
        console.log(data);
        
        response.redirect("/courses/list");
    }).catch((error) => {
        console.log("error " + error);

    });

});
module.exports = expressRouter