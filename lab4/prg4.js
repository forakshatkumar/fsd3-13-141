import express from "express";
import { products } from "./data.js";
import { log } from "node:console";

const app = express();
app.get("/", (req, res) => {
  res.send(`
        <h1>Home Page</h1>
        <a href="/api/products">Browse Products</a>
        `);
});
app.get("/api/products", (req, res) => {
  const modiProducts = products.map(
    ({ reviews, description, ...rest }) => rest,
  );
  res.status(200).json({
    msg: "Product Found!",
    count: modiProducts.length,
    data: modiProducts,
  });
});

//query string / request query must be after request parameters or dynamic

app.get("/api/products/query", (req, res) => {
  const { search, limit, mp, minr } = req.query;
  console.log("Search: ", search);
  console.log("Limit: ", limit);

  let sortedProducts = [...products]; //copy all products
  if (mp) {
    sortedProducts = sortedProducts.filter((item) => item.price <= Number(mp));
  }
  if (search) {
    sortedProducts = sortedProducts.filter((item) =>
      item.name.toLowerCase().startsWith(search),
    );
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    res
      .status(200)
      .json({ data: [], msg: "No product matched with your search" });
  } else {
    res
      .status(200)
      .json({ count: sortedProducts.length, data: sortedProducts });
  }
  res.send("Product Search page");
});

app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const p = products.find((item) => item.id === Number(id));
  if (p) {
    res.status(200).json({ status: true, data: p });
  } else {
    res
      .status(404)
      .json({ status: false, msg: `product not found with id: ${id}` });
  }
});

app.use((req, res) => {
  res.status(404).send("Route not found!");
});
app.listen(3000, () => {
  console.log("Program 4 server is running right now..");
});
