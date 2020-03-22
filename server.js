let express=require("express");
let app=express();
let session = require('express-session');
app.listen(8080,function(){
    console.log("server now is playing");
    require('./models/db')
});
