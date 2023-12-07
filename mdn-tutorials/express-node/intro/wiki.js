const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Wiki Home')
})

router.get('/about', (req, res) => {
    res.send('About this Wiki')
})

module.exports = router