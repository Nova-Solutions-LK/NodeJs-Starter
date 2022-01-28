const express = require("express");
const router = express.Router();
const controller = require("../../controllers/example.controller");

router.get("/example", controller.index);

module.exports = router;