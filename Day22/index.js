const { log } = require('console')
let connection=require('./db.js')
let bcrypt=require("bcrypt")

let express=require('express')

let app=express()
app.use(express.json())

app.get('/get',(req,res)=>{
    let email=req.body.email
    console.log(email);
    
    let sql=`select * from users`

    connection.query(sql,(err,result)=>{
        err?res.send(err):res.send(result)
    })
})

// app.post('/post',(req,res)=>{
//     let name=req.body.name

//     let mobile=req.body.mobile
//     // let salt=bcrypt.genSalt(14)
//     let hashedPhone=bcrypt.hashSync(mobile,14)

//     let email=req.body.email
//     let hashed_email=bcrypt.hashSync(email,13)

//     let password=req.body.password
    
//     let sql=`insert into users (name,mobile,email,password) values (?,?,?,?)`
//     connection.query(sql,[name,hashedPhone,hashed_email,password],(err,result)=>{
//         err?res.send(err):res.send("Data Inserted Successfully")
//         console.log(err);
        
//     })
// })

app.put('/compare',(req,res)=>{
    let email=req.body.email

    let Email=bcrypt.hashSync(email,14)
    console.log(Email);
    
    let isEmail=bcrypt.compareSync(email,Email)
    console.log(isEmail);
    res.send(isEmail)
    
})



// app.get('/',(req,res)=>{
//     let select=`select * from users`
//     connection.query(select,(err,result)=>{
//         if (err) {
//             res.send(err)
//         }else{
//             let email=result.map((val)=>{return val.email})
//             // let compareEmail=req.body.email
//             // let check=bcrypt.compareSync(email,compareEmail)
//             res.send(email)
//         }
//     })
// })








app.listen(3000,(err)=>{
    err?console.log(err):console.log("Server Started");
    
})