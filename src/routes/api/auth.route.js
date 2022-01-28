/*
 * Auth Child Routing
 * v1.0.0
 * Nova Solutions (Pvt) Ltd
 *
*/

const express = require("express");
const router = express.Router();
const controller = require("../../controllers/auth.controller");

router.post("/login", controller.login);

router.post("/logout", controller.logout);

router.post("/register", controller.register);

router.post("/login/token", controller.loginToken);

router.post("/token/refresh", controller.renewRefreshToken);

module.exports = router;