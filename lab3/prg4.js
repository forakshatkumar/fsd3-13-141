import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/api/products") {
    res.end(
      JSON.stringify({
        id: 1,
        name: "Mobile",
        price: 27000,
        rating: 4.7,
        review: 225,
      }),
    );
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(4000, () => console.log("prg4 is running 4000..."));
