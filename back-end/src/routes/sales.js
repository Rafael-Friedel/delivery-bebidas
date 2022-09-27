const express = require('express');

const salesController = require('../controllers/Sales');

const SalesRoute = express.Router();

SalesRoute.post('/', salesController.create);
SalesRoute.get('/:id', salesController.findById); // fazer innerJoin Sequelize
SalesRoute.get('/orders/:sellerId', salesController.findBySellerId);
SalesRoute.put('/:id', salesController.updateSale)

module.exports = SalesRoute;