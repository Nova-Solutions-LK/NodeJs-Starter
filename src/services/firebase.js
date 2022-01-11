/*
 * Firebase Service
 * v1.0.0
 * Nova Solutions (Pvt) Ltd
 *
*/

const config = require("../config");
const firebase = require('firebase');
const admin = require("firebase-admin");

const serviceAccount = require("./" + config.serviceAccount);

const firebaseConfig = {
    apiKey: config.apiKey,
    authDomain: config.authDomain,
    projectId: config.projectId,
    storageBucket: config.storageBucket,
    messagingSenderId: config.messagingSenderId,
    appId: config.appId
};

firebase.initializeApp(firebaseConfig);

admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });

exports.connect = () => {
    return admin
};