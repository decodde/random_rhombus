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
app.listen(PORT,"127.168.10.10",(err)=>{
    err?console.log(err):err
    console.log("           _______________\n          /              /\n         /random_rhombus/\n        /______________/\n  >>>>> server runnning <<<<<")
}) 