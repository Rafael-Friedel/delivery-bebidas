const { readToken } = require('../services/authService');
const salesService = require('../services/Sales');
const { throwNotExistError } = require('../services/utils');

const salesController = {
  create: async (req, res) => {
    const token = req.headers.authorization;

    if (!token) throwNotExistError('Token not found');

    await readToken(token);

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

  findByCustomerId: async (req, res) => {
    const { userId } = req.body;

    const customerOrder = await salesService.findByCustomerId(userId);

    return res.status(200).json(customerOrder);
  },
};

module.exports = salesController;
