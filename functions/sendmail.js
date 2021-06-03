const nodemailer = require('nodemailer');

exports.handler = function(event, context, callback) {

    let data = JSON.parse(event.body)

    let transporter = nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:465,
        auth:{
         user:'naptimephotographer@gmail.com',
         pass: process.env.password
    }
    });

    const mailBody = `<div>${`Name: ${data.name} <br><br> Email: ${data.email} <br><br> Phone Number: ${data.phoneNumber} <br><br> Ideal Session Date: ${data.sessionDate} <br><br> Service Information: ${data.service}`}</div>`
    
    transporter.sendMail({
        from: 'naptimephotographer@gmail.com',
        to: 'naptimephotographer@gmail.com',
        subject: `NEW Client Request From ${data.name}`,
        html: mailBody
    }, function(error, info) {
        if (error) {
            callback(error);
        } else {
            callback(null, {
            statusCode: 200,
            body: JSON.stringify({
                   'result': 'success'
                })
        });
        }
    });
}