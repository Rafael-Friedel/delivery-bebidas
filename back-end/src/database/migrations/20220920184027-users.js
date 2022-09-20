'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('Users', {
      id: {
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      role: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    })
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
