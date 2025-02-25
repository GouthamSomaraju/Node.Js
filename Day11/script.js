let username="goutham"
let password="10k"
// body:JSON.stringify{username,password}

async function apiCall(){
    let data=await fetch("http://localhost:3000",{
        method:"POST",
        body:JSON.stringify({username,password})
    })
     let res= await data
     console.log(res);
     
}
apiCall()