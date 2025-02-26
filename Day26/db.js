let mysql=require('mysql2')
require('dotenv').config()
let connection=mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
})

connection.connect((err)=>{
    err?console.log(err):console.log('database connected successfully');
})

module.exports=connection