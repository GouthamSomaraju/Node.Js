let express=require('express')

let products=require('./products.js')
// console.log(products);

const server=express()

server.use(express.json())

server.get('/',(req,res)=>{
    res.send(products)
})

// server.post('/',(req,res)=>{
//     let body=req.body
//     if(body.user=="king"&&body.password=="secret"){
//         res.send('login success')
//     }else{
//         res.send('inavlid credentials');
        
//     }
// })

server.put('/:id',(req,res)=>{
    let pro_id=req.params.id
    console.log(pro_id);
    

    let data=products.products.filter((val)=>{
        return val.id==pro_id
    })
    if(data.length>0){
        res.send(data)
    }else{
        res.send(" not found")
    }
})

server.patch('/:id',(req,res)=>{
    let pro_id=req.params.id
    let user_price=req.body.price
    let exists=false
    products.products.filter((val)=>{
        if(val.id==pro_id){
            exists=true
            val.price=user_price
            console.log(val)
            
        }
    })
    // res.send('patch')
    if(exists){
    res.send('product updated')
        
    }else{
        res.send('product not found')
        
    }

})

// server.delete('/:id',(req,res)=>{
//     let pro_id=Number(req.params.id)

//     // let initial_length=products.length
//     // console.log(initial_length);
    
    
//     let data=products.products.filter((val)=>{
//         return val.id!==pro_id
//     })

//     if(data.length<products.length){
//         products=data
//         res.send('product deleted')
//         console.log(products);
        
//     }else{
//         res.send('product not found!')
//     }
// })

server.delete('/:id', (req, res) => {
    let pro_id = Number(req.params.id); // Convert ID to number

    let initialLength = products.length;
    
    // Filter out the product
    let newProducts =products.products.filter((val) => val.id !== pro_id);

    if (newProducts.length < initialLength) {
        products = newProducts; // Update global array
        res.send({ message: "Product deleted successfully" });
    } else {
        res.status(404).send({ message: "Product not found!" });
    }
});


server.listen(3000,()=>{
    console.log('server started');
    
})