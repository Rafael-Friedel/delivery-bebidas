const model = require('../database/models');
const { throwNotExistError } = require('./utils');

const productService = {
  getAll: async () => {
    const allProducts = model.Product.findAll();

    if (!allProducts) return throwNotExistError();

    return allProducts;
  },
};

module.exports = productService;