import http from "http";
import { createReadStream } from "fs";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write(`
            <a href='/bottle'>Bottle</a>
            <a href='/matka'>Matka</a>
            `);
    res.end();
  } else if (req.url === "/bottle") {
    res.setHeader("content-type", "text/html");
    const stream = createReadStream("bottle.html", { encoding: "utf-8" });
    stream.pipe(res);
  } else if (req.url === "/matka") {
    res.setHeader("content-type", "text/html");
    const stream = createReadStream("matka.html", { encoding: "utf-8" });
    stream.pipe(res);
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(3000, () => console.log("prg3 is running at 3000..."));
