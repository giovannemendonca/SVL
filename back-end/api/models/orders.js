'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Orders.init({
    idCliente: DataTypes.STRING,
    cpf: DataTypes.STRING,
    nomeCliente: DataTypes.STRING,
    idLivro: DataTypes.STRING,
    tituloLivro: DataTypes.STRING,
    quantidade: DataTypes.STRING,
    valor: DataTypes.STRING,
    valorTotal: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};