module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      order_status: {
        type: Sequelize.STRING,
      },
      delivery_address: {
        type: Sequelize.STRING,
      },
      meals: {
        type: Sequelize.ARRAY(Sequelize.TEXT)
      },
      userId: {
        type: Sequelize.INTEGER,
        refrences: {
          model: 'Users',
          key: 'id',
        },
      },
      catererId: {
        type: Sequelize.INTEGER,
        refrences: {
          model: 'Users',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Orders');
  },
};
