const mailer = require("nodemailer");
require("dotenv").config()



const transport = mailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.MY_EMAIL,
    pass:process.env.APP_PASSWORD,
  },
});

module.exports = transport;
