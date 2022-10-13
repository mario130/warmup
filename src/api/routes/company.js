const companyController = require("../../controllers/Company")

const router = require('express').Router()

router.post('/add', companyController.addCompany)
router.get('/get-all', companyController.getCompanies)
router.get('/:id', companyController.getOneCompany)
router.put('/:id', companyController.updateCompany)
router.delete('/:id', companyController.deleteCompany)

module.exports = router