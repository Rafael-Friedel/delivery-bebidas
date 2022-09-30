const { throwNotExistError } = require('./utils');
const model = require('../database/models');

const salesService = {
  create: async (obj) => {
    const objectToSale = {
      userId: obj.userId,
      sellerId: obj.sellerId,
      totalPrice: obj.totalPrice,
      deliveryAddress: obj.deliveryAddress,
      deliveryNumber: obj.deliveryNumber,
      status: 'Pendente',
    };

    const { products } = obj;

    const created = await model.Sale.create(objectToSale);

    const response = products
      .map((element) => model.SalesProduct.create({ ...element, saleId: created.id }));

    await Promise.all(response);

    return created;
  },

  findById: async (id) => {
    const sale = await model.Sale.findOne(
      { where: { id },
        include: [
          { model: model.User, attributes: { exclude: ['password'] }, as: 'user' },
          { model: model.User, attributes: { exclude: ['password'] }, as: 'seller' }, 
          { 
            model: model.Product,
            as: 'Products', 
            through: { attributes: ['quantity'] }, 
          },
        ], 
      },
);

    if (!sale) {
      return throwNotExistError('Sale not found');
    }
    return sale;
  },

  findBySellerId: async (id) => {
    const sellerSales = await model.Sale.findAll({ where: { sellerId: id },
      });

    return sellerSales;
  },

  findByCustomerId: async (id) => {
    const customerOrder = await model.Sale.findAll({ where: { userId: id },
      });

    return customerOrder;
  },

  updateStatus: async (id, newStatus) => {
    const updatedSale = await model.Sale.update({ status: newStatus }, { where: { id } });

    return updatedSale;
  },
};

module.exports = salesService;