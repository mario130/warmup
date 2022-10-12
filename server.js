const Sequelize = require("sequelize");
require('dotenv').config()

// DB Connection
require("./src/database/connection")

// Authenticate
sequelizeConnection.authenticate().then(() => {
	console.log('Connection has been established successfully.');
}).catch((error) => {
	console.error('Unable to connect to the database: ', error);
});