const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Sudo$0Su#1', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
