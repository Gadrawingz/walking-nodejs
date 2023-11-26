// Using HTTP module
const http = require('http');

// Defining host name and port
const hostname = '127.0.0.1';
const port = 3001;

// Create a new HTTP server...
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Nodejs first app!');
});

server.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}/`);
});
