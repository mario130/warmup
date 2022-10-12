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

const Company = sequelizeConnection.define("companies", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true
	},
	manager: {
		type: DataTypes.STRING
	},
});





// -----
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
	companyId: {
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

Project.belongsTo(Company, {
	foreignKey: 'companyId'
})
Company.hasMany(Project)

sequelizeConnection.sync({ force: true }).then(() => {
	console.log('Companies table created successfully!');

	Company.create({
		name: "PG&E",
		manager: "Jack",
	}).then(res => {
		console.log(res)
	}).catch((error) => {
		console.error('Failed to create a new record : ', error);
	});

	// Company.findOne({
	// 	where: {
	// 		id: 1
	// 	}
	// }).then(res => {
	// 	console.log(res)
	// }).catch((error) => {
	// 	console.error('Failed to retrieve data : ', error);
	// });

	// Company.destroy({
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

sequelizeConnection.sync({ force: true }).then(() => {
	console.log('Projects table created successfully!');

	Project.create({
		title: "Timesheets",
		companyId: 1,
		references: {
			model: Company, // 'Movies' would also work
			key: 'company',

		},
		manager: "Steve Lew",
		start_date: new Date(),
		department: "Engineering"
	}).then(res => {
		console.log(res)
	}).catch((error) => {
		console.error('Failed to create a new record : ', error);
	});

	Project.create({
		title: "PrimeX",
		companyId: 1,
		references: {
			model: Company, // 'Movies' would also work
			key: 'company',

		},
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

	// Company.findAll({
	// 	include: [{
	// 		model: Project
	// 	}]
	// }).then(result => {
	// 	console.log("🚀 ~ file: companies.controllers.js ~ line 171 ~ sequelizeConnection.sync ~ result", result)
	// 	// console.log(result)
	// }).catch((error) => {
	// 	console.error('Failed to retrieve data : ', error);
	// });


}).catch((error) => {
	console.error('Unable to create table : ', error);
});

