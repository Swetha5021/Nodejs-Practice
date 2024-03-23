const http = require('http')

const server = http.createServer()

//using event emitter api
server.on('request', (req,res) => {
    res.end('welcome')
})

//creating a server at port 5000
server.listen(5000)
