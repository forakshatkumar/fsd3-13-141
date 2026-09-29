import express from "express";
import path from "path";
import { fileURLToPath } from "node:url";

const app = express();
const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);

app.use(express.static(path.join(dirName, "public")));

app.get("/",(req, res) => {
  res.status(404).send("Page Not Found");
});

app.listen(3333, () => {
  console.log("prg3 server is running..");
});
