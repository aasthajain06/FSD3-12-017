const http = require("http");

const server = http.createServer((req, res) => {
  
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello Client</h1>");
  console.log("Server hit");
});

server.listen(4444, () => {
  console.log("Server running on http://localhost:4444");
});