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

    transporter.sendMail({
        from: 'naptimephotographer@gmail.com',
        to: 'naptimephotographer@gmail.com',
        subject: `NEW Client Request From ${data.name}`,
        html: `<div>${`Name: ${data.name} | Email: ${data.email} | Phone Number: ${data.phoneNumber} | Ideal Session Date: ${data.sessionDate} | Service Information: ${data.service}`}</div>`
    }, function(error, info) {
        if (error) {
            callback(error);
        } else {
            callback(null, {
            statusCode: 200,
            body: JSON.stringify({
                   'result': 'success',
                   'statusCode': '200'
                })
        });
        }
    });
}