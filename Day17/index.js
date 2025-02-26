var express=require("express")
const { log } = require("node:console")

var fs=require("fs")
var app=express()
var port=3007

// sweets api -> pathname -sweets method -get data -index.json

app.get("/sweets",(req,res)=>{

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

app.get("/sweets/:id",(req,res)=>{
    fs.readFile("index.json","utf-8",(err,data)=>{

        var data1=JSON.parse(data)
        var filteredData=data1["sweets"].filter((val)=>{
            return val.id==req.params.id
        })
        res.send({msg:"successfully sent",
            status:200,
            data:filteredData
        })
    })
})

app.get("/register",(req,res)=>{

    console.log(req.query); //

    // res.send({query:req.query })
    res.send("hi this is register")
    

})

// root api -> '/'
app.get("/",(req,res)=>{
    fs.readFile("index.html","utf-8",(err,data)=>{
        if(err){
            res.send({
                msg:err.message,
                status:400
            })
        }else{
            res.send(data)
        }
    })
})

app.listen(port,()=>{
    console.log("server started");
    
})