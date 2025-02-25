const http=require("http")
const url=require("url")

// Body Parameters
const server=http.createServer((req,res)=>{

    // console.log(req);
    if(req.method==="POST"){
        let body=""
        req.on("data",(chunk)=>{
            // console.log(chunk.toString());
            body+=chunk.toString()
            res.write(body)
            res.end()
        })
        res.on("end",()=>{
            console.log("finished reading data");
        })
    }
    if(req.method==="GET"){
        res.write("<h1>hello User!</h1>")
        res.end()
    }


    
})

server.listen(3000,()=>{
    console.log("server is running");
})