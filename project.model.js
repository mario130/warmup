const { Sequelize, DataTypes } = require("sequelize");
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

const Project = sequelizeConnection.define("projects", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	title: {
		type: DataTypes.STRING,
		allowNull: false
	},
	company: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	manager: {
		type: DataTypes.STRING
	},
	start_date: {
		type: DataTypes.DATEONLY,
	},
	department: {
		type: DataTypes.STRING,
		allowNull: false,
	}
});

sequelizeConnection.sync({ force: true }).then(() => {
	console.log('Projects table created successfully!');
}).catch((error) => {
	console.error('Unable to create table : ', error);
});