const nodemailer = require('nodemailer')

const mailConfig = {
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'salvatore.lowe52@ethereal.email',
        pass: 'G9wXuv5BRgbrZHYhP8'
    }
}

module.exports = nodemailer.createTransport(mailConfig)
