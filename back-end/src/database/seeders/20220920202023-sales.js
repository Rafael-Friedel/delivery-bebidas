'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sales', [
      {        
        user_id: 3,
        seller_id: 2,
        total_price: 66,
        delivery_address: 'rua dos bobos',
        delivery_number: 1,
        sale_date: '2022-09-10',
        status: 'em progresso',        
      },
      {
        user_id: 3,
        seller_id: 2,
        total_price: 30,
        delivery_address: 'rua das Acácias',
        delivery_number: 2,
        sale_date: '2022-09-19',
        status: 'em progresso',
      },
      {
        user_id: 3,
        seller_id: 2,
        total_price: 134.46,
        delivery_address: 'rua dos lamentos',
        delivery_number: 3,
        sale_date: '2022-09-20 12:30:00',
        status: 'em progresso',
      }
    ],
    {
      timestamps: false
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sales', null, {});
  }
};
