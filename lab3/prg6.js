import http from "http";
import { getAllProducts } from "./products.js";

const server = http.createServer((req, res) => {
  if (req.url === "/api/v1/products" && req.method === "GET") {
    res.statusCode = 200;
    const data = getAllProducts();
    res.setHeader("contain-type", "application/json");

    res.end(
      JSON.stringify({
        count: data.length,
        data,
      }),
    );
  } else if (req.url === "/api/v1/products" && req.method === "POST") {
    // console.log("Request:", req);
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const product = JSON.parse(body);
      console.log("recieved product: ", product);
      res.statusCode = 201;
      res.end(JSON.stringify({ msg: "product added", product }));
    });
  } else if (req.url.startsWith("/products/") && req.method === "PUT") {
    const productID = req.url.split("/").pop();
    console.log("Update Product ID: ", productID);
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const product = JSON.parse(body);
      product.id = productID;
      console.log("recieved product: ", product);
      res.statusCode = 200;
      res.end(JSON.stringify({ msg: "product Updated", product }));
    });
  } else if (req.url === "/" && req.method === "DELETE") {
    res.statusCode = 200;
    res.end("Delete request");
  } else {
    res.statusCode = 404;
    res.end("request not found ");
  }
});
server.listen(5000, () => {
  console.log("prg6 is running.....");
});
