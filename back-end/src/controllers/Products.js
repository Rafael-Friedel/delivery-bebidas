const productsService = require('../services/Products');

async function products(_req, res) {
  const allProducts = await productsService.getAll();  

  const priceToNumber = allProducts.map((product) => {
    const object = {
      ...product.dataValues,
      price: Number(product.price),
    };
    return object;
  });

  res.status(200).json(priceToNumber);
}

module.exports = products;