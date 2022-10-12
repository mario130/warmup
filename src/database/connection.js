const { Sequelize, DataTypes } = require("sequelize");
require('dotenv').config()

const sequelizeConnection = new Sequelize(
	'database_1',
	process.env.mysql_username,
	process.env.mysql_password,
	{
		host: process.env.mysql_host,
		dialect: 'mysql'
	}
);

module.exports = sequelizeConnection;
global.sequelize = sequelizeConnection;