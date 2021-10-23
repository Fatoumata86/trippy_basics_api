const express = require("express");
const router = express.Router();

const authloginController = require("../controllers/authloginController");

router.post('/auth/login', authloginController.getAuthLoginPage);

module.exports = router;