const app = require('./app')
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const port = process.env.PORT || 5555

server.listen(port, () => {
  console.log('Magic happens on port ' + port)
})