export default function (req, res) {
    require('dotenv').config()

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 465,     
      host: "smtp.gmail.com",
         auth: {
              user: 'naptimephotographer@gmail.com',
              pass: process.env.password,
           },
      secure: true,
    });

    console.log(req.body)
    
    const mailData = {
        from: 'naptimephotographer@gmail.com',
        to: 'naptimephotographer@gmail.com',
        subject: `NEW Client Request From ${req.body.name}`,
        text: `New Client Request!`,
        html: `<div>${`Name: ${req.body.name} | Email: ${req.body.email} | Phone Number: ${req.body.phoneNumber} | Ideal Session Date: ${req.body.sessionDate} | Service Information: ${req.body.service}`}</div>`
    }
  
    transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
    })
  
    console.log(req.body)
    res.send('success')
  }