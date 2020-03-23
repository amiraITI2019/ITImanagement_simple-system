let express=require("express");
let app=express();  // refrence  //v8 as app  
let mongoose=require("mongoose");
var jquery = require('jquery');
app.use(jquery);
mongoose.connect("mongodb://localhost:27017/ITISystem",
 { useNewUrlParser: true, useUnifiedTopology: true })
.then((data) => {   //لما تخلص 
     console.log("DB Connected...");
     }).catch((error) =>  //لما يبقا فيه مشكلة
     { console.log(error + "") 
    });

let path = require("path");       
               //views أهم ميزة 
app.listen(8080,function(){  
      //callback function  when port is opened
    console.log("app now is started");

});
// settings
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "node_modules", "bootstrap", "dist")));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// endsettings
//middleware  خاصة بالسيرفر بتاعنا
app.use((request,response,next)=>{
    console.log("first middleware "+request.method+request.url); ///get/ //
    // response.send("Welcome")  //send response 
    next();  //skip to next url or middle
});
let authRouter=require("./routers/auth")
app.use(authRouter);
let studentsRouter=require("./routers/studentsRouting");
app.use("/students",studentsRouter);
let coursesRouter=require("./routers/coursesRouting");
app.use("/courses",coursesRouter);
let instructorsRouter=require("./routers/instructorsRouting");
app.use("/instructors",instructorsRouter);
let departmentsRouter=require("./routers/departmentsRouting");
app.use("/departments",departmentsRouter);
//default middle ware
app.use((request,response,next)=>{
    response.send("can't find router");  //send response 
    
});

