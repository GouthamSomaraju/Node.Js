var http = require("http");

var fs = require("fs");

var url = require("url");
const { log } = require("util");

var server = http.createServer((req, res) => {
  var parsedurl = url.parse(req.url, true);

  if (parsedurl.pathname == "/automobiles" && req.method == "POST") {
    fs.readFile("db.json", "utf-8", (err, data) => {
      if (err) {
        res.write(
          JSON.stringify({
            err: err.message,
          })
        );
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    });
  } else if (parsedurl.pathname == "/automobiles" && req.method == "GET") {
    console.log(parsedurl.query.fuelType);

    if (parsedurl.query.fuelType) {
      fs.readFile("db.json", "utf-8", (err, data) => {
        if (err) {
          res.write(
            JSON.stringify({
              err: err.message,
            })
          );
          res.end();
        } else {
          var dataa = JSON.parse(data);

          if (parsedurl.query.fuelType == "Gasoline") {
            console.log(dataa.automobiles);

            var Gasoline = dataa.sweets.filter((val) => {
              return val.fuelType == "Gasoline";
            });
            res.write(JSON.stringify(Gasoline));
            res.end();
          } else if (parsedurl.query.fuelType == "Hybrid") {
            var Hybrid = dataa.automobiles.filter((val) => {
              return val.fuelType == "Hybrid";
            });
            res.write(JSON.stringify(Hybrid));
            res.end();
          } else if (parsedurl.query.fuelType == "Electric") {
            var Electric = dataa.automobiles.filter((val) => {
              return val.fuelType == "Electric";
            });
            res.write(JSON.stringify(Electric));
            res.end();
          } else if (parsedurl.query.fuelType == "Diesel") {
            var Diesel = dataa.automobiles.filter((val) => {
              return val.fuelType == "Diesel";
            });
            res.write(JSON.stringify(Diesel));
            res.end();
          } else {
            res.write(data);
            res.end();
          }
        }
      });
    } else {
      res.end("send FuelType");
    }
  } else {
    res.write(
      JSON.stringify({
        msg: "hi resorce not found",
      })
    );
    res.end();
  }
});

server.listen(3007, () => {
  console.log("hi this server is running");
});
