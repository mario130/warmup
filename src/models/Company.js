const { Sequelize, DataTypes } = require("sequelize");
const sequelizeConnection = require("../database/connection")

module.exports = sequelizeConnection.define("companies", {
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