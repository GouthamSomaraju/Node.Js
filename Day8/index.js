let http=require("http")
let url=require("url")

let port=3000

let server=http.createServer(async(req,res)=>{

    console.log(req.url);// /

    var parsedUrl=url.parse(req.url,true)

    console.log(parsedUrl);// /
    
    
        let result=await fetch('https://fakestoreapi.com/products')
        let data=await result.json()
        
        // console.log(data);
        // data.sort((a,b)=>{
        //     return a.price-b.price
        // })
        // res.write(JSON.stringify(data))

        if(parsedUrl.query.order==="asce"){
            data.sort((a,b)=>{
                return a.price-b.price
            })
            res.write(JSON.stringify(data))
            res.end()
        }else if(parsedUrl.query.order==="desc"){
            data.sort((a,b)=>{
                return b.price-a.price
            })
            res.write(JSON.stringify(data))
            res.end()
        }else{
            res.write(JSON.stringify(data))
            res.end()
        }

        // res.write(JSON.stringify(parsedUrl.query))
        // res.end()
        
    
    
})

server.listen(port,()=>{
    console.log('http://localhost:'+port);
    
})