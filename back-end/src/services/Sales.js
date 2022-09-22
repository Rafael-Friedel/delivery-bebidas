const model = require('../database/models');

const salesService = {
  create: async (obj) => {
    const created = await model.Sale.create(obj);  

    return created;
  },
};

module.exports = salesService;