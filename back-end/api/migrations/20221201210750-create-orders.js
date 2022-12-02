'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idCliente: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Clients', key: 'id' }
      },

      idBook: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Books', key: 'id' }
      },
      quantidade: {
        type: Sequelize.INTEGER
      },
      desconto: {
        type: Sequelize.FLOAT
      },
      valorTotal: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};