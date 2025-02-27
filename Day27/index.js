let express=require('express')
let multer=require('multer')

let path=require('path')
let fs=require('fs')

let foldername=path.join(__dirname+'/uploads')
let exists=fs.existsSync(foldername)
if(!exists){
    fs.mkdirSync(foldername,{recursive:true})
}

let app=express()

app.use(express.json())

let storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads')
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})
let uploads=multer({storage:storage})

app.post('/upload',uploads.single('file'),(req,res)=>{
    res.send('File uploaded')
})

app.listen(3000,(err)=>{
    console.log('server started');
    
})