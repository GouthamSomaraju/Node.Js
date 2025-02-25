let http=require("http");
let url=require("url")
let fs=require("fs")

let port=3000
let server=http.createServer((req,res)=>{

    // console.log(req.url);
    let parsedUrl=url.parse(req.url,true)
    
    if(parsedUrl.pathname==="/5"){

        fs.watchFile("db","api",(err)=>{
            if(err){
                console.log(err);
            }else{
                console.log("file is created");
            }
        })
        res.write("File created")
        res.end()
    }

})
server.listen(port,()=>{
    console.log("server is running");
    
})