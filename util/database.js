const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Sudo$0Su#1', {
    dialect: 'mysql', 
    host: 'localhost'
})

module.exports =sequelize;

// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-complete',
//     password: 'Sudo$0Su#1'
// });

// module.exports = pool.promise();