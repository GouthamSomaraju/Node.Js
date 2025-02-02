// 29-01-2025
// Task1. create a folder when we hit api 
// Task2. delete files and folders in folder using rmdir  

// Importing required modules
var fs = require("fs");  // 'fs' is the file system module, used to interact with the file system (read/write files).
var http = require("http"); // 'http' is the module used to create an HTTP server.

// Define the port number where the server will listen.
let port = 3000;

// Create an HTTP server that listens for incoming requests.
var server = http.createServer((req, res) => {
    // Check if the request method is a GET request.
    if (req.method === "GET") {
        // When a GET request is made, write to a file named "index.txt".
        fs.writeFile("index.txt", "file created", (err) => {
            // If there is an error while writing the file, log the error to the console.
            console.log(err);
        });

        // Respond to the client with the message "file created".
        res.write("file created");

        // End the response with the message "good bye".
        res.end("good bye");
    }
});

// Make the server listen on the specified port (3000 in this case).
server.listen(port, () => {
    // Once the server starts, log the server URL to the console.
    console.log("http://localhost:" + port);
});
// *************************************************************************************8

let fs=require("fs")
fs.readdir("./Hi",(err,data)=>{
    // console.log(data); //[ 'index.txt', 'index2.txt' ]
    if(err){
        console.log(err);
    }
   if(data.length>0){
       data.map((val)=>{
        fs.unlink("./Hi/"+val,(err)=>{
            if(err){
                console.log(err);
                
            }else{
                console.log(val," deleted");
                
            }
        })
       })  
       
        
    }else{
        fs.rmdir("./Hi",(err)=>{
            if (err) {
                console.log(err);
                
            }else{
                console.log("Deleted Folder");
                
            }
            
        })
    }
    
})