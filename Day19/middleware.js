const sample_middleware=((req,res,next)=>{
    console.log(req);
    next()
    
})

module.exports={sample_middleware}