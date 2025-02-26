let connection=require('./sql.js')
let express=require("express")

let app=express()
app.use(express.json())

// app.get('/data',(req,res)=>{
//     let sql=`select * from users`
//     connection.query(sql,(err,result)=>{
//         if(err){
//             console.log(err);
            
//         }else{
//             res.send(result)
//         }
//     })
// })
// app.post('/post',(req,res)=>{
//     let insert=`insert into users values (2,"nikhil","nikhil12@gmail.com",23);`

//     connection.query(insert,(err,result)=>{
//         if(err){
//             res.send('error');
            
//         }else{
//             res.send('inserted successfully');
//         }
//     })
// })



app.post('/login',(req,res)=>{
    let email=req.body.email
    let password=req.body.password
    // console.log(email,password);
    
    let validate=`select * from users where email='${email}' and password='${password}';`
    connection.query(validate,(err,result)=>{
        if(err){
            res.send(err)

        }else{
            // res.send(result)
            if(result.length>0){
                res.send('login success')
            }else{
                res.send('invalid credentials')
            }
        }
    })
})




app.listen(3000,(err)=>{
    if(err){
        console.log(err);
        
    }else{
        console.log('server connected');
        
    }
})