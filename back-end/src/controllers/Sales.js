const salesService = require('../services/Sales');

const salesController = {
  create: async (req, res) => {
    const created = await salesService.create(req.body);

    return res.status(201).json(created);
  },

  findById: async (req, res) => {
    const { id } = req.params;

    const sale = await salesService.findById(id);

    return res.status(200).json(sale);
  },

  findBySellerId: async (req, res) => {
    const { sellerId } = req.params;

    const sellerSales = await salesService.findBySellerId(sellerId);

    return res.status(200).json(sellerSales);
  },
};

module.exports = salesController;
