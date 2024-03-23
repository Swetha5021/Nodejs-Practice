const http = require('http')

const server = http.createServer()

//using event emitter api
server.on('request', (req,res) => {
    res.end('welcome')
})

server.listen(5000)