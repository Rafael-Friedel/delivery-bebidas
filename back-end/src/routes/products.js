const express = require('express');
const ProductsController = require('../controllers/Products');

const ProductsRoute = express.Router();

ProductsRoute.get('/', ProductsController);

module.exports = ProductsRoute;