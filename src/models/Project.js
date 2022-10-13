const { Sequelize, DataTypes } = require("sequelize");
const sequelizeConnection = require("../config/database/connection")

module.exports = sequelizeConnection.define("projects", {
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
		defaultValue: new Date()
	},
	department: {
		type: DataTypes.STRING,
		allowNull: false,
	}
});