var express=require('express')
var app=express()
var middleware=require('./middleware')
app.use(express.json())
var port=3000

app.get('/',middleware.sample_middleware,(req,res)=>{
    res.send('hello get method')
})
app.post('/',(req,res)=>{
    res.send(req.body)
})

app.listen(port,(req,res)=>{
    console.log('server started');
    
})









element.addEventListener('click',function() {
    alert('Button was clicked!');
});