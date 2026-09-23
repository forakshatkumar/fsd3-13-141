import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

//always listen at last
app.listen(3333, () => {
  console.log("Server is running on 3333");
});
