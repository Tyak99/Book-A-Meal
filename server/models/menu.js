module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  Menu.associate = function(models) {
    // associations can be defined here
    Menu.belongsTo(models.User, {
      foreignKey: 'catererId',
    });
  };
  return Menu;
};
