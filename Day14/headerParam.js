// headers parameter
// headers parameter is used to send headers in the request. It is an object of key-value pairs. The key is the header name and the value is the header value.

var http = require("http");

var server = http.createServer((req, res) => {
  
    console.log(req.headers);

    res.setHeader("User","King")
  res.end("hello this is end");
});

server.listen(3000, () => {
  console.log("server is running");
});

// http method