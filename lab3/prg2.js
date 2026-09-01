import http from "http";

const server = http.createServer((req, res) => {
  res.write("<h1>You Have Access to this Server</h1>");
  res.write("<h3>Akshat Kumar</h3>");
  res.end();
});

server.listen(4444, () => console.log("Server is running at 4444..."));
