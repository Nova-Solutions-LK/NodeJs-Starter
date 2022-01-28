/*
 * NodeMailer Service
 * v1.0.0
 * Nova Solutions (Pvt) Ltd
 *
*/

const config = require("../config");
const nodemailer = require("nodemailer");

const mailer = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: config.mailUsername,
        pass: config.mailPassword,
    },
})

module.exports = {
    mailer
}