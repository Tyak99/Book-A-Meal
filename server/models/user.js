module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      lastName: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: DataTypes.STRING,
    },
    {}
  );
  User.associate = function(models) {
    // associations can be defined here
    User.belongsTo(models.Role, {
      foreignKey: 'roleId',
    })
  };
  return User;
};
