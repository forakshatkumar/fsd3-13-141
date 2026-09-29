import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});
const products = [
  {
    id: 1,
    name: "marker",
    qty: 3,
    price: 104,
  },
  {
    id: 2,
    name: "board",
    qty: 2,
    price: 499,
  },
];
app.get("/products", (req, res) => {
  // res.status(200).send(products);
  res.status(200).json(products);
});

app.use((req, res) => {
  res.status(404).send("<h1>Page not found</h1>");
});

//always listen at last
app.listen(3333, () => {
  console.log("Server is running on 3333");
});
