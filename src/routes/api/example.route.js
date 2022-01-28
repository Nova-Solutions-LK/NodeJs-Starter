/*
 * Example Child Routing
 * v1.0.0
 * Nova Solutions (Pvt) Ltd
 *
*/

const express = require("express");
const router = express.Router();
const controller = require("../../controllers/example.controller");

router.get("/example", controller.index);

module.exports = router;