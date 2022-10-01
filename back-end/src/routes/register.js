const express = require('express');
const registerController = require('../controllers/Register');
const adminRegisterController = require('../controllers/AdminRegister');

const RegisterRoute = express.Router();

RegisterRoute.post('/', registerController);
RegisterRoute.post('/admin', adminRegisterController);

module.exports = RegisterRoute;