const express = require('express');
const { use } = require('.');
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { messages });
});

router.get('/new', function(req, res, next) {
  res.render('form')
})

router.post('/new', function(req, res, next) {
  console.log(req.body)
  const {username, text} = req.body
  messages.push({text, user: username, added: new Date()})
  res.redirect('/')
})

module.exports = router;
