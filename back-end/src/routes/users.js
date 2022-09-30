const express = require('express');
const salesController = require('../controllers/Sales');

const userController = require('../controllers/User');

const UserRoute = express.Router();

UserRoute.get('/', userController.findAll);
UserRoute.get('/sellers', userController.findSellers);
UserRoute.get('/customer', userController.findCustomers);
UserRoute.get('/customer/orders/:id', salesController.findByCustomerId);
UserRoute.get('/id', userController.findUserById);

module.exports = UserRoute;
