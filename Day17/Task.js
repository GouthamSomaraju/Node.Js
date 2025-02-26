var express=require("express")
const { log } = require("node:console")

var fs=require("fs")
var app=express()
var port=3007

// workout_plan api -> pathname -sweets method -get data -index.json

app.get("/workout_plan",(req,res)=>{

    // res.send(req.params)

    fs.readFile("index.json","utf-8",(err,data)=>{
        if(err){
            res.send({
                status:400,
                msg:err.message
            })
        }else{
            res.send({
                status:200,
                msg:"successfully read",
                data:JSON.parse(data)
            })
        }
    })
})

app.get("/workout_plan/:day",(req,res)=>{
    fs.readFile("index.json","utf-8",(err,data)=>{

        var data1=JSON.parse(data)
        var filteredData=data1["workout_plan"].filter((val)=>{
            return val.day==req.params.day
        })
        res.send({msg:"successfully sent",
            status:200,
            data:filteredData
        })
    })
})

app.listen(port,()=>{
    console.log("server started");
    
})


// npm i express
// npm i nodemon
// npm install -g nodemon
// nodemon Task.js