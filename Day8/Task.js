const { log } = require("console")
let http=require("http")
const { json } = require("stream/consumers")
let url=require("url")

let port=3000

let server=http.createServer(async(req,res)=>{

    // console.log(req.url); //output: /?category=mens
    
    let parsedUrl=url.parse(req.url,true)

    // console.log(parsedUrl.query); //output: { category: 'mens' }
    

    let data=await fetch("https://fakestoreapi.com/products")
    let result=await data.json()
    // result.sort((a,b)=>{
    //     return b.id-a.id
    // })

    if(parsedUrl.query.category==="mens"){
        result=result.filter((products)=>{
            return products.category==="men's clothing"
        })
        res.write(JSON.stringify(result))
        res.end()
    }else if(parsedUrl.query.category==="womens"){
        result=result.filter((products)=>{
            return products.category==="women's clothing"
        })
        res.write(JSON.stringify(result))
        res.end()
    }else if(parsedUrl.query.category==="electronics"){
        result=result.filter((products)=>{
            return products.category==="electronics"
        })
    }else if(parsedUrl.query.category==="jewelery"){
        result=result.filter((products)=>{
            return products.category==="jewelery"
        })
    }
    else{
        res.write(JSON.stringify(result))
        res.end()
    }
    
    
})

server.listen(port,()=>{
    console.log("http://localhost:"+port);
    
})