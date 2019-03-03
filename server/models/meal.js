/* eslint-disable func-names */
module.exports = (sequelize, DataTypes) => {
  const Meal = sequelize.define(
    'Meal',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
  );
  Meal.associate = function (models) {
    // associations can be defined here
    Meal.belongsTo(models.User, {
      foreignKey: 'catererId',
    });
  };
  return Meal;
};
