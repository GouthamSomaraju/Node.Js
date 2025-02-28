let mysql=require('mysql2')

let connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'node_db'
})

connection.connect((err)=>{
    if(err) throw err;
    console.log('Connected to the MySQL server.');
})

module.exports=connection

