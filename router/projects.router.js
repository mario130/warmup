const projectController = require("../controllers/Project")

const router = require('express').Router()

router.post('/add', projectController.addProject)
router.get('/get-all', projectController.getProjects)
router.get('/:id', projectController.getOneProject)
router.put('/:id', projectController.updateProject)
router.delete('/:id', projectController.deleteProject)

module.exports = router