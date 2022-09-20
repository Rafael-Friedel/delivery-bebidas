'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('SalesProducts', {
      saleId: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'sale_id',
        references: {
          model: 'Sales',
          key: 'id',
        }
      },
      productId: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'product_id',
        references: {
          model: 'Products',
          key: 'id',
        }
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('SalesProducts');
  }
};
