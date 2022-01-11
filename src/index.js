/*
 * 
 * v1.0.0
 * Nova Solutions (Pvt) Ltd
 *
*/

const app = require('./services/express')
const mongoose = require('./services/mongoose')
const firebase = require('./services/firebase');

app.start();
mongoose.connect();
firebase.connect();

module.exports = app