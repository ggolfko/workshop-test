const express = require('express')
const router = express.Router()
// middleware to use for all requests
router.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})
module.exports = router