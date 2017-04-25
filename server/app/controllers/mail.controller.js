var nodemailer = require("nodemailer");
const nodemailerConfig = require('./../../config/nodemailer');
const smtpTransport = nodemailer.createTransport(nodemailerConfig);

exports.send = function(req, res) {
    let mailOptions = {
        to: "amnucgmanee@gmail.com",
        subject: "TEST",
        text: "test"
    }

    smtpTransport.sendMail(mailOptions, function(error, response) {
        if (error) {
            console.log(error);
            res.end("error");
        } else {
            console.log("Message sent: " + response.message);
            res.end("sent");
        }
    });
};