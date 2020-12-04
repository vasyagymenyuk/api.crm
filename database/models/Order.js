const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {}
  }

  Order.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      buyDate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      orderNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      boughtPositionName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      boughtPositionCost: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      boughtPositionQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },

    {
      sequelize,
      modelName: 'Order',
      tableName: 'orders',
    }
  );

  return Order;
};
