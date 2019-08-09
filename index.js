var express=require("express")
var app=express()
const PORT=80
var fs=require("fs")
var path=require("path")
//var db=require("./lib/dbprocess")
var session=require('express-session')
app.use(require('body-parser')());
app.use(express.static(__dirname+"/views"))
app.set('views',__dirname+"/views")
app.set('view engine',  'pug');
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin","*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With:XMLHttpRequest, Content-Type:*, Accept");

  next();
});
app.get("/",(req,res)=>{

})

app.get("/random-number/between/:min/:max",(req,res)=>{     
    
    var randomVal=(req.params.max-(req.params.max-req.params.min)*Math.random())
    console.log(randomVal)
    res.json({value:randomVal})
})

app.get("/random-string/between/:min/:max",(req,res)=>{

})

app.get("/")
app.listen(process.env.PORT||80,(err)=>{
    err?console.log(err):err
    console.log("           _______________\n          /              /\n         /random_rhombus/\n        /______________/\n  >>>>> server runnning <<<<<")
}) 
