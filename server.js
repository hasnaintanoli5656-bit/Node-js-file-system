const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url == "/products") {
    res.end("YA LO SAREC PRODUCTS !!!");
  } else if (req.url == "/users") {
    res.end(" bohot sare users  !!!");
  } else {
    res.end("HELLO FROM THE SERVER");
  }
});

server.listen(5700, "127.0.0.1", () => {
  console.log("SERVER IS LISTEN ON THE PORT 5700");
});
