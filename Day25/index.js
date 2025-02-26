let express=require('express')
let connection=require('./db.js')
let jwt=require('jsonwebtoken') 

let app=express()
app.use(express.json())

let seceretKey='abcdefghijklmnopqrstuvwxyz0987654321'

app.get('/',(req,res)=>{
    res.send('hello')
})
app.post('/signup',(req,res)=>{
    let {email,password,name,mobile}=req.body
    let token=jwt.sign({name:email,password:password},seceretKey)

    let insertqry=`insert into users (name,mobile,email,password,token) values(?,?,?,?,?)`
    connection.query(insertqry,[name,mobile,email,password,token],(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send('User registered successfully')
            
        }
    })
})

app.post('/login',(req,res)=>{
    let {email,password}=req.body
    let token=jwt.sign({name:email,password:password},seceretKey)


    let qry=`select* from users where email=? and password=?`
    connection.query(insertqry,[email,password],(err,result)=>{
        if(err){
            res.send(err)
        }else{
            if(result.length>0){
                res.send(token)
            }else{
                res.send('Invalid email or password')
            }
        }
    })
})


app.listen(3000,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('Server started on port 3000');
    }
})