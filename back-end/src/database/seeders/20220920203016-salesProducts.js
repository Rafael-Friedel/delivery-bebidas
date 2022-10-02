'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sales_products', [
      {
        sale_id: 1,
        product_id: 1,
        quantity: 30,
      },
      {
        sale_id: 2,
        product_id: 2,
        quantity: 4,
      },
      {
        sale_id: 1,
        product_id: 3,
        quantity: 54,
      },
      {
        sale_id: 3,
        product_id: 2,
        quantity: 12,
      },
      {
        sale_id: 3,
        product_id: 5,
        quantity: 15,
      }
    ],
    {
      timestamps: false,
    }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sales_products', null, {});
  }
};
