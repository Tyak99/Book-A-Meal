"use strict";

require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: null,
    database: process.env.DB_NAME,
    host: process.env.HOST,
    dialect: 'postgres'
  },
  test: {
    username: 'nasri',
    password: null,
    database: 'book_a_meal_test',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres'
  }
};
//# sourceMappingURL=config.js.map