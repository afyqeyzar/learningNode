const http = require("http");
const fs = require("fs");
const port = 8080;

const server = http.createServer((req, res) => {
  res.write("Hello Node");
  res.end();
});

server.listen(port, (error) => {
  if (error) {
    console.log("ERROR", error);
  } else {
    console.log("listening on port" + port);
  }
});
