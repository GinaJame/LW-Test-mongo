const nodemailer = require('nodemailer')

const mailConfig = {
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'sean.nolan15@ethereal.email',
        pass: 'BEfND9RdDUzGZtVwnG'
    }
}

module.exports = nodemailer.createTransport(mailConfig)
