"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Orders.belongsTo(models.Clients, {
        foreignKey: "idCliente",
      });
      Orders.belongsTo(models.Books, {
        foreignKey: "idBook",
      });
    }
  }
  Orders.init(
    {
      quantidade: DataTypes.NUMBER,
      desconto: DataTypes.NUMBER,
      valorTotal: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Orders",
    }
  );
  return Orders;
};
