"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  }
  Books.init(
    {
      titulo: DataTypes.STRING,
      autor: DataTypes.STRING,
      editora: DataTypes.STRING,
      dataPublicacao: DataTypes.DATE,
      isbn13: DataTypes.STRING,
      numeroPaginas: DataTypes.NUMBER,
      valor: DataTypes.NUMBER,
      quantidade: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "Books",
    }
  );
  return Books;
};
