'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  }
  Clients.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    telefone: DataTypes.STRING,
    dataNascimento: DataTypes.DATEONLY,
    cep: DataTypes.STRING,
    endereco: DataTypes.STRING,
    numero: DataTypes.STRING,
    complemento: DataTypes.STRING,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Clients',
  });
  return Clients;
};