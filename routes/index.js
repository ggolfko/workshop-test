const express = require('express')
const router = express.Router()
const users = require('./users')
// register our router
router.use('/users', users)
// perhaps expose some API metadata at the root
router.get('/', (req, res) => {
  res.json({
    message: 'hooray! welcome to server!'
  })
})
module.exports = router