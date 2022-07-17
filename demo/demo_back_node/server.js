const restify = require('restify')
var PORT = 8002
var server = restify.createServer()

server.get('/test', (req, res, next) => {
    console.log('backend server is alive')
    res.send(200)
})

server.listen(PORT, '0.0.0.0', function () {
    console.log('%s listening at %s', server.name, server.url)
})