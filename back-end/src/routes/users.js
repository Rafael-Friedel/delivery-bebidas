const express = require('express');
const salesController = require('../controllers/Sales');

const userController = require('../controllers/User');

const UserRoute = express.Router();

UserRoute.get('/', userController.findAll);
UserRoute.get('/sellers', userController.findSellers);
UserRoute.get('/customer', userController.findCustomers);
UserRoute.get('/customer/orders', salesController.findByCustomerId);
UserRoute.get('/sellers/id', userController.findSellerById);

module.exports = UserRoute;