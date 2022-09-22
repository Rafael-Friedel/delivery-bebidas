const express = require('express');

const salesController = require('../controllers/Sales');

const SalesRoute = express.Router();

SalesRoute.post('/', salesController.create);

module.exports = SalesRoute;