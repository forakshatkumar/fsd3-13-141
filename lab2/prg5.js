import { stat } from "fs/promises";
const stats = await stat("readme.md");
console.log("is file:", stats.isFile());
console.log("is directory :", stats.isDirectory());
console.log("size (bytes):", stats.size);
console.log("last modified :", stats.mtime);
