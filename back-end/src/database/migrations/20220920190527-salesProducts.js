'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('sales_products', {
      saleId: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'sale_id',
        references: {
          model: 'sales',
          key: 'id',
        }
      },
      productId: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'product_id',
        references: {
          model: 'products',
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
    await queryInterface.dropTable('sales_products');
  }
};
