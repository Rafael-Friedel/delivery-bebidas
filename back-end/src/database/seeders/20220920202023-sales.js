'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sales', [
      {        
        user_id: 3,
        seller_id: 2,
        total_price: 66,
        delivery_address: "Geremias de Santo Cristo",
        delivery_number: 540,
        status: "Pendente",
        sale_date: '2022-09-26'
      },
      {
        user_id: 3,
        seller_id: 2,
        total_price: 30,
        delivery_address: 'rua das Acácias',
        delivery_number: 2,
        status: 'Pendente',
        sale_date: '2022-09-26'
      },
      {        
        user_id: 3,
        seller_id: 2,
        total_price: 134.46,
        delivery_address: 'rua dos lamentos',
        delivery_number: 3,
        status: 'Pendente',
        sale_date: '2022-09-26'
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
