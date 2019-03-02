'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    price: DataTypes.INTEGER,
    order_status: DataTypes.STRING,
    delivery_address: DataTypes.STRING,
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};