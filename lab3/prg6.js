import http from "http";
import {
  getAllProducts,
  updateProduct,
  getProductbyId,
  addProduct,
  deleteProduct,
} from "./products.js";

const server = http.createServer((req, res) => {
  if (req.url === "/api/v1/products" && req.method === "GET") {
    res.statusCode = 200;
    const data = getAllProducts();
    res.setHeader("content-type", "application/json");
    res.end(
      JSON.stringify({
        count: data.length,
        data,
      }),
    );
  } else if (req.url === "/api/v1/products" && req.method === "POST") {
    // console.log("Request :" , req);
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const product = JSON.parse(body);
      const item = addProduct(product);
      console.log("received products ", product);
      res.statusCode = 201;
      res.end(JSON.stringify({ msg: "product receieved ", data: item }));
    });
  } else if (req.url.startsWith("/products/") && req.method === "PUT") {
    const productID = req.url.split("/").pop();
    console.log("Updata product id:", productID);
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const product = JSON.parse(body);
      product.id = productID;
      const updatedProduct = updateProduct(id, product);
      if (!updatedProduct) {
        res.end(JSON.stringify({ msg: `id ${productID} not found!` }));
      } else {
        res.statusCode = 200;
        res.end(JSON.stringify({ msg: "product updated", updatedProduct }));
      }
    });
  } else if (
    req.url.startsWith("/api/v1/products/") &&
    req.method === "DELETE"
  ) {
    const pid = Number(req.url.split("/").pop());
    res.statusCode = 200;
    if (deleteProduct(pid)) {
      res.end(JSON.stringify({ msg: "item deleted" }));
    } else {
      res.end(JSON.stringify({ msg: "product with id ${pid} not found" }));
    }
  } else if (req.url.startsWith("/api/v1/products/") && req.method === "GET") {
    const pid = Number(req.url.split("/").pop());
    res.statusCode = 200;
    const product = getProductbyId(pid);

    if (product) {
      res.end(JSON.stringify({ data: product }));
    } else {
      res.end(JSON.stringify({ msg: "product with id ${pid} not found" }));
    }
  } else {
    res.statusCode = 404;
    res.end("request not found ");
  }
});
server.listen(5000, () => {
  console.log("prg6 is running.....");
});
