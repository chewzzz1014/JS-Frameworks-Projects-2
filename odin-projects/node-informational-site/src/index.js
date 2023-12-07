const express = require('express')
const path = require('path')
require('dotenv').config()


const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/about.html'))
})

app.get('/contact-me', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/contact-me.html'))
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/404.html'))
})

app.listen(port, () => {
    console.log(`server running at port ${port}`)
})