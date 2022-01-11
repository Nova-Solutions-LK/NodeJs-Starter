/*
 * Express Service
 * v1.0.0
 * Nova Solutions (Pvt) Ltd
 *
*/

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

const config = require('../config');
const apiRouter = require('../routes/api');

const app = express();

app.use(cors());
app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRouter);

exports.start = () => {
    app.listen(config.port, config.host, (err) => {
        if (err) {
            console.log(`Error : ${err}`);
            process.exit(1);
        }
        console.log(`${config.APP_NAME} Backend API - ${config.port}`);
    });
}