// Create web server
// Create a web server that will respond to a POST request with the body "Hello World" and a GET request with the body "Goodbye World". The server should listen on port 3000.

// You should use the http module to create the server.

// You should listen for POST requests on the path / and GET requests on the path /.

// The server should be started by calling server.listen(3000).

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    res.end("Hello World");
  } else if (req.method === "GET") {
    res.end("Goodbye World");
  }
});

server.listen(3000);