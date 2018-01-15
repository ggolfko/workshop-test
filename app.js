const express = require('express')
const app = express()
const morgan = require('morgan')
const middleware = require('./middleware')
// create our router
const router = require('./routes/index')
// configure app
app.use(morgan('dev')) // log requests to the console
app.use(middleware) // register our middleware
app.use(router) // register our router
module.exports = app