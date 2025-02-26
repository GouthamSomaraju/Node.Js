const express = require("express");

const app = express();
app.use(express.json());


const connection = require("./db.js");
const middleware = require("./middleware.js");
const transport = require("./mail.js");

app.post("/register", async (req, res) => {
  const { name, email, password, age, city, mobile, confirmPassword } = req.body;


  if (password !== confirmPassword) {
    return res.status(400).json({ error: "Passwords do not match" });
  }

  let sql = `SELECT * FROM students WHERE email = ?`;

  connection.query(sql, [email], async (err, info) => {
    if (err) {
      return res.status(500).json({ error: "Database error", details: err });
    }
    if (info.length > 0) {
      return res.status(400).json({ error: "User already exists" });
    } else {
      try {
        let otp = await middleware.create_otp(6);
        let text = `Your verification OTP is ${otp}`;
        let mail = await middleware.send_otp(transport, email, text);
        return res.status(200).json({ message: "OTP sent successfully", mail });
      } catch (error) {
        return res.status(500).json({ error: "Failed to send OTP", details: error.message });
      }
    }
  });
});

app.listen(3000, () => {
  console.log(`Server started on port 3000`);
});
