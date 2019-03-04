"use strict";

/* eslint-disable func-names */
module.exports = function (sequelize, DataTypes) {
  var Meal = sequelize.define('Meal', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Meal.associate = function (models) {
    // associations can be defined here
    Meal.belongsTo(models.User, {
      foreignKey: 'catererId'
    });
  };

  return Meal;
};
//# sourceMappingURL=meal.js.map