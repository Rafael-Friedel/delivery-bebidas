const express = require('express');

const userController = require('../controllers/User');

const UserRoute = express.Router();

UserRoute.get('/', userController.findAll);
UserRoute.get('/sellers', userController.findSellers);

module.exports = UserRoute;