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
		type: DataTypes.STRING,
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

sequelizeConnection.sync().then(() => {
	console.log('Projects table created successfully!');

	Project.create({
		title: "Timesheets",
		company: "PG&E",
		manager: "Steve Lew",
		start_date: new Date(),
		department: "Engineering"
	}).then(res => {
		console.log(res)
	}).catch((error) => {
		console.error('Failed to create a new record : ', error);
	});

	// Project.findOne({
	// 	where: {
	// 		id: 1
	// 	}
	// }).then(res => {
	// 	console.log(res)
	// }).catch((error) => {
	// 	console.error('Failed to retrieve data : ', error);
	// });

	// Project.destroy({
	// 	where: {
	// 		id: 1
	// 	}
	// }).then(() => {
	// 	console.log("Successfully deleted record.")
	// }).catch((error) => {
	// 	console.error('Failed to delete record : ', error);
	// });
}).catch((error) => {
	console.error('Unable to create table : ', error);
});