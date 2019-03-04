"use strict";

/* eslint-disable func-names */
module.exports = function (sequelize, DataTypes) {
  var Order = sequelize.define('Order', {
    price: DataTypes.INTEGER,
    order_status: DataTypes.STRING,
    delivery_address: DataTypes.STRING,
    meals: DataTypes.ARRAY(DataTypes.TEXT)
  });

  Order.associate = function (models) {
    // associations can be defined here
    Order.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'User'
    });
    Order.belongsTo(models.User, {
      foreignKey: 'catererId',
      as: 'Caterer'
    });
  };

  return Order;
};
//# sourceMappingURL=order.js.map