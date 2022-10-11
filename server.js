const Sequelize = require("sequelize");
require('dotenv').config()

// Setup the connection
const sequelizeConnection = new Sequelize(
	'database_1',
	process.env.mysql_username,
	process.env.mysql_password,
	{
		host: process.env.mysql_host,
		dialect: 'mysql'
	}
);

// Authenticate
sequelizeConnection.authenticate().then(() => {
	console.log('Connection has been established successfully.');
}).catch((error) => {
	console.error('Unable to connect to the database: ', error);
});