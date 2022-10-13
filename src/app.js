const express = require('express');
const projectsRouter = require('./api/routes/projects')
const companyRouter = require('./api/routes/company')

require("./config/database/bootstrap")()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
	res.json({ message: "Hello there!" })
})

// routers
app.use('/api/projects', projectsRouter)
app.use('/api/companies', companyRouter)

const PORT = 8081
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))