import { readFile } from "fs/promises";
const data = await readFile("stud.txt", "utf-8");
console.log("File contents");
console.log(data);
