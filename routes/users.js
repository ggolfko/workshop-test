const express = require('express')
const router = express.Router()
router.get('/', function (req, res) {
  res.send({
    message: 'get all users'
  })
})
module.exports = router