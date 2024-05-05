/* const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete','root','Srinathg99',{
    dialect :'mysql',
    host :'localhost'
});

module.exports = sequelize; */

/* const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Srinathg99', {
    dialect: 'mysql',
    host: 'localhost',
    dialectOptions: {
        // Specify the authentication plugin
        authPlugins: {
            mysql_clear_password: () => () => Buffer.from('Srinathg99') // Assuming the plugin is 'mysql_clear_password'
        }
    }
});

module.exports = sequelize; */

/* const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Srinathg99', {
    dialect: 'mysql',
    host: 'localhost',
    dialectOptions: {
        ssl: 'Amazon RDS' // You can also try 'Amazon RDS' or 'Amazon Aurora'
    }
}); */

const Sequelize = require('sequelize');
const sequelize = new Sequelize('node-complete', 'root', 'Srinathg99', {
  dialect: 'mysql',
  host: 'localhost',
  dialectOptions: {
      ssl: true
  }
});

module.exports = sequelize;

