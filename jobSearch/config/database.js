const Sequelize = require('sequelize');

module.exports =  new Sequelize('codejob', 'postgres', '', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: 6,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});