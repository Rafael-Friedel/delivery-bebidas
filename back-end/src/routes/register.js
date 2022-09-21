const express = require('express');
const registerController = require('../controllers/register');

const RegisterRoute = express.Router();

RegisterRoute.post('/register', registerController);

module.exports = RegisterRoute;