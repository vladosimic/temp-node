const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    res.end("here is about");
  } else {
    res.end(`<h1>Ooops!</h1> <a href="/">Go back</a> `);
  }
});

server.listen(5000);
