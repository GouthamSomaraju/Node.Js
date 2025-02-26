let mysql=require('mysql2')

let connection=mysql.createConnection({
    host:'localhost',
    user:"root",
    password:"123456",
    database:"node_db"
})

connection.connect((err)=>{
    err?console.log(err):console.log('database connected successfully');
    
})

module.exports=connection