let express = require("express");
let connection = require("./db.js");
let jwt = require("jsonwebtoken");
let secretKey = "THIS_IS_EMPLOY_DATA_SECRET_KEY_AND_IT_IS_VERY_IMPORTANT";
let app = express();
app.use(express.json());

app.get("/", (req, res) => {
    let qry = `select * from employs`;
    connection.query(qry, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
//   let { id, name, mobile, email, password, role } = req.body;
//   let token = jwt.sign(
//     { name: name, role: role, mobile: mobile, email: email },
//     secretKey
//   );

//   // let sql='insert into employs (Name,Mobile,Email,Password,Role,Token) values(?,?,?,?,?,?)'

//   connection.query(
//     sql,
//     [id, name, mobile, email, password, role, token],
//     (err, result) => {
//       if (err) {
//         res.send(err);
//       } else {
//         res.send("inserted successfully");
//       }
//     }
//   );
});

app.get("/validate", (req, res) => {
  try {
    let token = req.headers.authorization.split(" ")[1];

    if (!token) {
      res.send("Unauthorized:No token provided");
    }

    let users = jwt.verify(token, secretKey);

    let sql = `select * from employs`;

    if (users.role == "Admin") {
      sql = "select * from employs";
    } else if (users.role == "Developer") {
      sql = `select * from employs where Role='Developer'`;
    } else if (users.role == "Tester") {
      sql = `select * from employs where Role='Tester'`;
    } else if (users.role == "Manager") {
      sql = `select * from employs where Role='Manager'`;
    } else {
      res.send("You are not authorized to access this data");
    }
    connection.query(sql, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        if (result.length > 0) {
          res.send(result);
        } else {
          res.send("No data found");
        }
      }
    });
  } catch (err) {
    res.send("Invalid token");
  }
});

app.listen(3000, (err) => {
  console.log("server started");
});
