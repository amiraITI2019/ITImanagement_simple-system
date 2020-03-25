let express=require("express");
let expressRouter=express.Router() //Router Object
let mongoose = require("mongoose");
require("./../models/departments")
let departmentsSchema = mongoose.model("departments"); //Getting the collection
require("./../models/instructors")
let instructorsSchema = mongoose.model("instructors"); //Getting the collection


// list students
expressRouter.get("/list",(request,response,next)=>{ //get in url
	departmentsSchema.find({}).populate("manager").then((data) => {      
        console.log(data);

        response.render("departments.ejs", { departments: data });

	}).catch((error) => { console.log(error + "") });


});
expressRouter.get("/add",(request,response,next)=>{ //get in url
	response.render("addDepartment.ejs")	
});
expressRouter.post("/add",(request,response,next)=>{ //get in url
	let newDepartment=new departmentsSchema(
		{
			name: request.body.name,
			manager: 0


		}
	);
	newDepartment.save(
		(error)=>{
			// console.log("error " + error);

		}
	);
next();
});
expressRouter.get("/edit",(request,response,next)=>{ //get in url
	response.send("edit depts view")
	next();

});
expressRouter.post("/edit",(request,response,next)=>{ //get in url
	response.send("edit depts")
	next();

});
expressRouter.post("/delete",(request,response,next)=>{ //get in url
	response.send("delete depts")
	next();

});
module.exports=expressRouter
