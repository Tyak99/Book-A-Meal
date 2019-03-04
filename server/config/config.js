module.exports = {
  development: {
    username: 'nasri',
    password: null,
    database: 'book-a-meal',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  test: {
    username: 'nasri',
    password: null,
    database: 'book_a_meal_test',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
