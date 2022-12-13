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
        type: Sequelize.STRING
      },
      cpf: {
        type: Sequelize.STRING
      },
      nomeCliente: {
        type: Sequelize.STRING
      },
      idLivro: {
        type: Sequelize.STRING
      },
      tituloLivro: {
        type: Sequelize.STRING
      },
      quantidade: {
        type: Sequelize.STRING
      },
      valor: {
        type: Sequelize.STRING
      },
      valorTotal: {
        type: Sequelize.STRING
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