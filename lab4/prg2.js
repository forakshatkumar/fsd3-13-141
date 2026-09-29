import express from "express";
import path from "path";
import { fileURLToPath } from "node:url";

const app = express();
const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);

app.get("/", (req, res) => {
  res.sendFile(path.join(dirName, "htmlPages", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(dirName, "htmlPages", "about.html"));
});

app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(3333, () => {
  console.log("prg2 server is running..");
});
