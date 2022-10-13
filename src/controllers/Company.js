const Company = require('../models/Company')

const addCompany = async (req, res) => {
	let companyInfo = {
		name: req.body.name,
		manager: req.body.manager,
	}

	const company = await Company.create(companyInfo)
	res.status(200).send(company)
}

const getCompanies = async (req, res) => {
	const companies = await Company.findAll({})
	res.status(200).send(companies)
}

const getOneCompany = async (req, res) => {
	let id = req.params.id
	let company = await Company.findOne({ where: { id } })
	res.status(200).send(company)
}

const updateCompany = async (req, res) => {
	let id = req.params.id
	let company = await Company.update(req.body, { where: { id } })
	res.status(200).send(company)
}

const deleteCompany = async (req, res) => {
	let id = req.params.id
	await Company.destroy({ where: { id } })
	res.status(200).send(`Deleted company #${id}`)
}

module.exports = {
	addCompany,
	getCompanies,
	getOneCompany,
	updateCompany,
	deleteCompany
}