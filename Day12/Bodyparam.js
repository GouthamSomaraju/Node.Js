var http=require("http")

var fs=require("fs")
var server=http.createServer((req,res)=>{

    var a=''
    // async collecting data from the body
    req.on('data',(chunk)=>{
        a+=chunk.toString()
        console.log(a);
        
        res.end(a)
    })
    req.on('end',()=>{
        // res.end(a)
        // res.end(JSON.stringify({
        //     d:"data",
        //     a:a
        // }))

        fs.writeFile("index.json",a,"utf-8",(err)=>{

            if(err){
                res.end(JSON.stringify(err))
                // res.end()})
            }else{
                res.end(JSON.stringify({
                    data:"hi successfully stored in file"
                }))
            }
        })
    })
})

server.listen(3000,()=>{
    console.log("server is running");
})