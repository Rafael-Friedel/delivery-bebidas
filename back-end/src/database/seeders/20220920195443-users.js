'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Delivery App Admin',
        role: 'administrator',
        email: 'adm@deliveryapp.com',
        password: '$2b$08$lG789PKNI5l/CrSRzv71du1JfMkVVsA/DCNCq9hXfYDzld5oxupWG',
      },
      {
        name: 'Fulana Pereira',
        role: 'seller',
        email: 'fulana@deliveryapp.com',
        password: '3c28d2b0881bf46457a853e0b07531c6',
      },
      {
        name: 'Cliente Zé Birita',
        role: 'customer',
        email: 'zebirita@email.com',
        password: '1c37466c159755ce1fa181bd247cb925',
      }
    ], { timestamps: false});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
