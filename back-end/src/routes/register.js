const express = require('express');
const registerController = require('../controllers/Register');

const RegisterRoute = express.Router();

RegisterRoute.post('/', registerController);

module.exports = RegisterRoute;