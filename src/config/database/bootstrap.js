const sequelizeConnection = require("./connection")

module.exports = () => {

	const Company = require('../../models/Company')
	const Project = require('../../models/Project')

	const errorHandler = error => console.error("Error: ", error)

	// Initiate one-to-many realtionship
	Project.belongsTo(Company, {
		foreignKey: 'companyId'
	})
	Company.hasMany(Project)

	// Start creating companies & projects
	sequelizeConnection.sync({ force: true }).then(async () => {

		await Company.create({
			name: "PG&E",
			manager: "Jack",
		}).catch(errorHandler);

		await Project.create({
			title: "PrimeX",
			companyId: 1,
			references: {
				model: Company,
				key: 'company',
			},
			manager: "Steve Lew",
			department: "Engineering"
		}).catch(errorHandler);
	}).catch(errorHandler);
}