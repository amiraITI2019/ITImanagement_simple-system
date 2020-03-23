let express=require("express");
let expressRouter=express.Router() //Router Object
let mongoose = require("mongoose");
require("./../models/courses")
let coursesSchema = mongoose.model("courses"); //Getting the collection

// list students
expressRouter.get("/list",(request,response,next)=>{ //get in url
    response.send("list courses")
    next();
    
});
expressRouter.get("/add",(request,response,next)=>{ //get in url
    response.send("add course view")
    next();
    
});
expressRouter.post("/add",(request,response,next)=>{ //get in url
    response.send("add course")
    next();
    
});
expressRouter.get("/edit",(request,response,next)=>{ //get in url
    response.send("edit course view")
    next();
    
});
expressRouter.post("/edit",(request,response,next)=>{ //get in url
    response.send("edit course")
    next();
    
});
expressRouter.post("/delete",(request,response,next)=>{ //get in url
    response.send("delete course")
    next();
    
});
module.exports=expressRouter