const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete','root','Srinathg99',{
    dialect :'mysql',
    host :'localhost'
});

module.exports = sequelize;