const mysql=require("mysql2")


const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123456",
    database:"node_db"
})

connection.connect((err)=>{
    if(err){
        console.log('failed to connect');
    }else{
        console.log('connected successfully');
        
    }
    
}) 


module.exports=connection