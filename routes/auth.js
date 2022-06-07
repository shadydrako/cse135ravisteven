//organize all the routes for all the different pages
const express = require('express');
const authController = require('../controller/auth')
const router = express.Router();


router.post('/register', authController.register);

module.exports = router;