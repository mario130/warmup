const express = require('express');
const cors = require('cors');
const projectsRouter = require('./router/projects.router')

require("./bootstrap")()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
	res.json({ message: "Hello there!" })
})

// routers
app.use('/api/projects', projectsRouter)

const PORT = 8081
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))