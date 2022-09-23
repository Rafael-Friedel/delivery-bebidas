const salesService = require('../services/Sales');

const salesController = {
  create: async (req, res) => {
    const created = await salesService.create(req.body);

    return res.status(201).json(created);
  },
};

module.exports = salesController;
