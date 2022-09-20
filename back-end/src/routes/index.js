const express = require('express');
const LoginRoute = require('./login');

const router = express.Router();

router.use('/login', LoginRoute);

module.exports = router;