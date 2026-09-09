import http from "http";
import { reviews, items } from "./data.js";

const server = http.createServer((req, res) => {
  if (req.url === "/api/products") {
    res.end(JSON.stringify(items));
  } else if (req.url === "/api/review") {
    res.end(JSON.stringify(reviews));
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(4000, () => console.log("prg4 is running 4000..."));
