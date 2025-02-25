var express=require("express")
var app=express()

app.get('/',async(req,res)=> {
    let result= await fetch("https://fakestoreapi.com/products")
    let data= await result.json()
    res.json(data)
})
app.post('/post',(req,res)=>{
    res.send("post method")
})
app.listen(3000,()=>{
    console.log("Server Started");
    
})