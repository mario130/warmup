const Project = require('../models/Project')

const addProject = async (req, res) => {
	let projectInfo = {
		title: req.body.title,
		companyId: req.body.companyId,
		manager: req.body.manager,
		department: req.body.department,
	}

	const project = await Project.create(projectInfo)
	res.status(200).send(project)
}

const getProjects = async (req, res) => {
	const projects = await Project.findAll({})
	res.status(200).send(projects)
}

const getOneProject = async (req, res) => {
	let id = req.params.id
	let project = await Project.findOne({ where: { id } })
	res.status(200).send(project)
}

const updateProject = async (req, res) => {
	let id = req.params.id
	let project = await Project.update(req.body, { where: { id } })
	res.status(200).send(project)
}

const deleteProject = async (req, res) => {
	let id = req.params.id
	await Project.destroy({ where: { id } })
	res.status(200).send(`Deleted project #${id}`)
}

module.exports = {
	addProject,
	getProjects,
	getOneProject,
	updateProject,
	deleteProject
}