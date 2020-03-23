let express=require("express");
let expressRouter=express.Router() //Router Object
// sending data get post 
// put delete
// 2 methods 
// 1) url ->form 
// 2) ?name=eman&password=x    query string
// 3) routing parameter eman-->without name   /login/eman/123
// receive data as json object
// encryption
expressRouter.get("/login",(request,response,next)=>{ //get in url
    response.render("login.ejs")
    next();
    
});
expressRouter.post("/login",(request,response,next)=>{ //post hidden 
    response.send("post login")
    next();
    
});
expressRouter.get("/register",(request,response,next)=>{
    response.send("get register")
    next();
    
});
expressRouter.post("/register",(request,response,next)=>{
    response.send("post register")
    next();
    
});
expressRouter.get("/logout",(request,response,next)=>{
    response.send("logout")
    next();
    
});
module.exports=expressRouter;