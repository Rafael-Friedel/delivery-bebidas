const express = require('express');
const loginController = require('../controllers/Login');

const LoginRoute = express.Router();

LoginRoute.post('/', loginController);

module.exports = LoginRoute;