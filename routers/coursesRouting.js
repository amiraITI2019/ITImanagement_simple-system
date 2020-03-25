let express = require("express");
let expressRouter = express.Router() //Router Object
let mongoose = require("mongoose");
require("./../models/courses")

let coursessSchema = mongoose.model("courses"); //Getting the collection


// list courses
expressRouter.get("/list", (request, response, next) => { //get in url

    coursessSchema.find({}).then((data) => {

        response.render("courses.ejs", { courses: data });

    }).catch((error) => { console.log(error + "") });


});
expressRouter.get("/add", (request, response, next) => { //get in url

    response.render("addCourse.ejs");



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
        response.render("editCourse.ejs", { course: data });
    }).catch((error) => { console.log(error + "") });


});
expressRouter.post("/edit", (request, response, next) => { //get in url
    response.send("edit instructor")
    next();

});
expressRouter.post("/delete/:id", (request, response, next) => { //get in url
    coursessSchema.findByIdAndDelete(request.params.id).then((data) => {
        response.status(200);
    }).catch((error) => {
        console.log("error " + error);

    });
    // response.send("success")
});
module.exports = expressRouter