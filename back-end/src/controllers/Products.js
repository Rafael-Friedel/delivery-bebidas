const productsService = require('../services/Products');

async function products(req, res) {

  const allProducts = await productsService.getAll();

  res.status(200).json(allProducts);
}

module.exports = products;