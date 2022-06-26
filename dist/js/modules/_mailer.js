const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: "druzhe.valdemar@gmail.com",
        pass: "dxbyluuduwvtbkdk"
    }
});

message = {
    from: 'portfolio <druzhe.valdemar@gmail.com>',
    to: "druzhe.valdemar@icloud.com",
    subject: "New Customer",
    text: "hello biatch"
}

transporter.sendMail(message, function(err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
});