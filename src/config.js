/*
 * Global Configuration
 * v1.0.0
 * Nova Solutions (Pvt) Ltd
 *
*/

require("dotenv").config();

module.exports = {
    app_name: process.env.APP_NAME || 'NodeJs Starter By Nova Solutions (Pvt) Ltd',
    port: process.env.APP_PORT || 5000,
    host: process.env.APP_HOST || '0.0.0.0',

    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: process.env.FIREBASE_AUTHDOMAIN,
    projectId: process.env.FIREBASE_PROJECTID,
    storageBucket: process.env.FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
    appId: process.env.FIREBASE_APPID,
    serviceAccount: process.env.FIREBASE_SERVICE_ACCOUNT,

    mongodbUrl: process.env.MONGO_DB_URL
}