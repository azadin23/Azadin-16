const http = require("http");

const server = http.createServer( (req, res) => {
    if (req.url === '/about') {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write('Welcome to about us Page!');
        res.end()
    }
    else if (req.url === '/contact') {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write('Welcome to contact us Page!');
        res.end()
    }
    else {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write('Hello World');
        res.end()
    }
}) ;

server.listen(8000);

