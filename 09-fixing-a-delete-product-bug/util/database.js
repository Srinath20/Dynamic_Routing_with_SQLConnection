const mysql = require('mysql2');
const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'node-complete2',
    password:'Srinathg99'
})

module.exports = pool.promise();