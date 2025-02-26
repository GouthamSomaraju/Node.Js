
const { log } = require('console');
const connection=require('./db.js')

const express = require('express')
const app=express()

app.use(express.json()) 
// creating a table in the database
// const sql=`create table movies (name varchar(50),hero varchar(30),collection int,duration varchar(10))`

// connection.query(sql,(err,res)=>{
//     if(err){
//         console.log('failed to execute query');
        
//     }else{
//         console.log('successfully executed query',res);
        
//     }
// })

// Adding or Inserting values into the query
// let sqlInsert='insert into movies values ( "piushpa", "Allu Arjun",1000,"3:30mins" );'

// connection.query(sqlInsert,(err,res)=>{
//     if(err){
//         console.log('failed to execute query');
        
//     }else{
//         console.log('successfully executed query',res);
        
//     }
// })

// getting table data from database

// const sqlSelect="select * from movies"

// connection.query(sqlSelect,(err,res)=>{
//     if(err){
//         console.log('failed to execute query');
        
//     }else{
//         console.log('successfully executed query',res);
//         // console.table(res)
        
//     }
// })


// app.get('/getMovie',(req,res)=>{
//     const sqlSelect="select * from movies"

//     connection.query(sqlSelect,(err,result)=>{
//         if(err){
//             console.log('failed to execute query');
            
//         }else{
//             console.log('successfully executed query',result);
//             res.send(result)
//             // console.table(res)
            
//         }
//     })
// })

// app.post("/checkName",(req,res)=>{

//     let movie_name=req.body.name

//     let sql=`select * from movies where name='${movie_name}';`

//     connection.query(sql,(err,result)=>{
//         if(err){
//             console.log('failed to execute query');
            
//         }else{
//             if(result.length>0){
//                 res.send("name already taken")
//             }else{
//                 res.send("name is available")
//             }
//         }
//     })
// })


app.post('/login',(req,res)=>{
    let user_email=req.body.email
    let sql=`select * from users where email='${user_email}';`
    connection.query(sql,(err,result)=>{
        if(err){
            console.log(err);
            
        }else{
            if(result.length>0){
                res.send("login success")
            }else{
                res.send("invalid credentials")
            }
            
        }
    })
})


















app.listen(3000,(err)=>{
    console.log("server started");
    
})