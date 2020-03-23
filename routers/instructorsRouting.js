let express=require("express");
let expressRouter=express.Router() //Router Object
let mongoose = require("mongoose");
require("./../models/instructors")
let instructorsSchema = mongoose.model("instructors"); //Getting the collection

// list students
expressRouter.get("/list",(request,response,next)=>{ //get in url
 
    instructorsSchema.find({}).populate("department").then((data) => {      

        response.render("instructors.ejs", { instructors: data });

	}).catch((error) => { console.log(error + "") });

    
});
expressRouter.get("/add",(request,response,next)=>{ //get in url
    response.send("add instructor view")
    next();
    
});
expressRouter.post("/add",(request,response,next)=>{ //get in url
    response.send("add instructor")
    let newInstructor=new instructorsSchema(
        {
            fullname: "amira reda",
            mobile: "01201474300",
            department: 1
            
            
        }
    );
    newInstructor.save(
        (error)=>{
            console.log("error "+error);
            
        }
    );
    next();
    
});
expressRouter.get("/edit",(request,response,next)=>{ //get in url
    response.send("edit instructor view")
    next();
    
});
expressRouter.post("/edit",(request,response,next)=>{ //get in url
    response.send("edit instructor")
    next();
    
});
expressRouter.post("/delete/:id",(request,response,next)=>{ //get in url
    instructorsSchema.findByIdAndDelete(request.params.id).then((data)=>{
        console.log("Success")
    }).catch((error)=>{
        console.log("error "+error);
        
    });
    response.send("success")
});
module.exports=expressRouter