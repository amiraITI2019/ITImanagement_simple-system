let express = require("express");
let expressRouter = express.Router() //Router Object
    // sending data get post 
    // put delete
    // 2 methods 
    // 1) url ->form 
    // 2) ?name=eman&password=x    query string
    // 3) routing parameter eman-->without name   /login/eman/123
    // receive data as json object
    // encryption
expressRouter.get("/", (request, response, next) => { //get in url
    response.render("login.ejs")


});
expressRouter.get("/login", (request, response, next) => { //get in url
    response.render("login.ejs")


});
expressRouter.post("/login", (request, response, next) => { //post hidden 
    // console.log(;

    if (request.body["username"] == "admin" && request.body["password"] == "admin123") {
        request.session.role = 'admin';
        response.redirect("/home");

    } else {
        response.send("username or password isn't correct")
    }

});
expressRouter.get("/home", (request, response, next) => {
    response.render("home.ejs")
});

expressRouter.get("/logout", (request, response, next) => {
    request.session.destroy();
    response.redirect("/login")

});
module.exports = expressRouter;