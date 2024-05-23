// const mysql = require('mysql2');
// const pool = mysql.createPool({
//     host:'localhost',
//     user:'root',
//     database:'node-complete2',
//     password:'Srinathg99'
// })

// module.exports = pool.promise();

const Sequelize = require('sequelize');
const sequelize = new Sequelize('node-complete2','root','Srinathg99',{
    dialect:'mysql',
    host:'localhost'
});

module.exports = sequelize