let express=require('express')
let multer=require('multer')
const connection = require('./db')
let app=express()
app.use(express.json())



let mystorage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./uploads')
    },
    filename: (req,file,cb)=>{
        cb(null, Date.now()+file.originalname)
    }
})

let storage=multer({storage:mystorage})

app.post('/upload',storage.single('file'),(req,res)=>{
    if((req.file.mimetype!=='image/jpeg'||req.file.mimetype!=='image/png') && req.file.size>5*1024*1024){
        res.send('File format not supported, only jpg and png are supported')
    }else{
        let filename=req.file.filename
        let pathname=req.file.path
        let name=req.body.name
        let sql=`insert into files (filename,pathname,name) values (?,?,?)`
        connection.query(sql,[filename,pathname,name],(err,result)=>{
            if(err){
                res.send(err)
            }else{
                res.send('data inserted successfully')
            }
        })
    }
    console.log(req.file);
    
})

app.listen(3000,(err)=>{
console.log('server started');

})