const express = require('express');
const userController = require('../controllers/User');

const LoginRoute = express.Router();

LoginRoute.post('/', userController.create);

module.exports = LoginRoute;