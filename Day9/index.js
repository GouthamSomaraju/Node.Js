let http=require("http")
let url=require("url")

let port=3000
// Route parameter
let server=http.createServer((req,res)=>{
    var parsedUrl=url.parse(req.url,true)
    if(parsedUrl.pathname==="/goutham"){
        res.write("Welcome this is goutham")
        res.end()   
    }else if(parsedUrl.pathname==="/10k"){
        res.write("Welcome this is 10k")
        res.end()   
    }else{
        res.write("create a path with goutham/10k")
        res.end()
    }

})

server.listen(port,()=>{
    console.log("http://localhost:"+port);
    
})