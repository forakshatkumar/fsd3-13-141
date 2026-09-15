import { readFile, writeFile, appendFile, unlink } from "fs/promises";

const writeData = async (fname, contents) => {
  await writeFile(fname, contents);
  console.log("file written");
};
const readData = async (fname) => {
  const data = await readFile(fname, "utf-8");
  console.log("file content");
  console.log(data);
};
const appendData = async (fname, contents) => {
  await appendFile(fname, "\n" + contents);
};
const deleteFile = async (fname) => {
  await unlink(fname);
  console.log(`${fname} deleted`);
};
//await writeData("happy.txt" , "I am very happy") ;
//await readData("happy.txt") ;
//await appendData("happt.txt" . "FSD is good") ;
//await readData("happy.txt") ;
await deleteFile("happy.txt");
