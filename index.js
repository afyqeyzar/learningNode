const http = require("http");
const fs = require("fs");

const hostName = "localhost";
const port = 8080;

const server = http.createServer((req, res) => {
  const myURL = new URL(req.url, `http://${hostName}:${port}/`);
  let fileName = "";
  myURL.pathname === "/" ? (fileName = `index`) : (fileName = myURL.pathname);

  fs.readFile(`./${fileName}.html`, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write(
        fs.readFileSync("./404.html", (err, data) => {
          if (err) throw err;
          return data;
        })
      );
      return res.end();
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    }
  });
});

server.listen(port, (error) => {
  if (error) {
    console.log("ERROR", error);
  } else {
    console.log("listening on port" + port);
  }
});
