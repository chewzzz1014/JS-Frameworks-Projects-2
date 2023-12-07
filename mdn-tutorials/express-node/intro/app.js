const express = require('express')
const wiki = require('./wiki')
const logger = require('morgan')

const app = express()
const port = 3000

app.use(logger('dev')) // for logging
app.use(express.static('public')) // for using static files

app.get("/", (req, res) => {
    res.send('Hello World')
})

app.use('/wiki', wiki)

// error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(port, () => {
    console.log(`Port listening on port ${port}`)
})