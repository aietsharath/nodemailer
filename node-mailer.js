const express = require("express");
const app = express();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "nssharath226@gmail.com",
    pass: "",
  },
});

const mailOptions = {
  from: "nssharath226@gmail.com",
  to: "sharath.ns@technicalcareer.education",
  subject: "Test Email",
  text: "This is a test email sent from Node.js using Nodemailer.",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});
app.listen(4000, () => {
  console.log("server is running on port 4000");
});
