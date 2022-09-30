const { readToken } = require('../services/authService');
const salesService = require('../services/Sales');
const { throwNotExistError, throwInvalidFields } = require('../services/utils');

const possibleStatus = ['Preparando', 'Em Trânsito', 'Entregue'];

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
    const { id } = req.params;

    const customerOrder = await salesService.findByCustomerId(id);

    return res.status(200).json(customerOrder);
  },

  updateSale: async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) return throwNotExistError('You need to provide a status');

    const isPossible = possibleStatus.some((element) => status === element);

    if (!isPossible) return throwInvalidFields('Invalid Status to update');

    const updatedStatus = await salesService.updateStatus(id, status);

    if (!updatedStatus) return throwInvalidFields();

    return res.status(200).json({ message: 'Status updated' });
  },
};

module.exports = salesController;
