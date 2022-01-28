/*
 * Global API Routing
 * v1.0.0
 * Nova Solutions (Pvt) Ltd
 *
*/

const express = require("express");
const router = express.Router();

const exampleRouter = require('./example.route');

router.use('/example', exampleRouter);

module.exports = router;