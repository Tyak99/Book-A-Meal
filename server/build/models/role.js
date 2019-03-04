"use strict";

module.exports = function (sequelize, DataTypes) {
  var Role = sequelize.define('Role', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});

  Role.associate = function (models) {
    // associate can be defined here
    Role.hasMany(models.User, {
      foreignKey: 'roleId',
      as: 'users'
    });
  };

  return Role;
};
//# sourceMappingURL=role.js.map