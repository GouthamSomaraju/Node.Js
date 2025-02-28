let express=require('express')
let multer=require('multer')
let connection=require('./db.js')
let app=express()
app.use(express.json())

let mystorage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./uploads')
    },
    filename:(req,file,cb)=>{
        cb(null, Date.now()+file.originalname)
    }
})
let upload=multer({storage:mystorage})

app.post('/upload',upload.single('file'),(req,res)=>{
    if(req.file.mimetype!=='image/png'&&req.file.size<=5*1024*1024){
        res.send('File format not supported, only jpg is supported')
    }else{
        // res.send('File uploaded')
        let name=req.body.name
        let filename=req.file.filename
        // console.log(filename);
        
        let filepath=req.file.path
        let sql=`insert into files (filename,pathname,name) values (?,?,?)`
        connection.query(sql,[filename,filepath,name],(err,result)=>{
            if(err) throw err;
            res.send('File uploaded')
        })
    // }
    console.log(req.file);}
})


app.get('/files',(req,res)=>{
    let sql=`select * from files`
    connection.query(sql,(err,result)=>{
        if(err){
            res.send('Error')
        }else{
            res.json(result.map((item)=>{
                item.pathname=__dirname+item.pathname
                return item
            }))
        }
    })
})





app.listen(3000,(err)=>{
    console.log('server started');
})