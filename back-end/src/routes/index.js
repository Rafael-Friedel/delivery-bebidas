const express = require('express');
const LoginRoute = require('./login');
// const RegisterRoute = require('./register');

const router = express.Router();

router.use('/login', LoginRoute);
// router.use('/register', RegisterRoute);

module.exports = router;