import { writeFile } from "fs/promises";

const f1 = () => {
  console.log("F1");
};
const f2 = () => {
  console.log("F2");
};
const f3 = () => {
  console.log("F3");
};

const writeData = async () => {
  await writeFile("Note.txt", "I am fs module");
  console.log("File written");
};

const main = () => {
  console.log("main");
  writeData();
  // // f1();
  setTimeout(f2, 0); //executes seprately after some time
  // // setInterval(f2,1000); //executes repeatedly after given time
  setImmediate(f3);
  process.nextTick(f1);
  console.log("end");

  new Promise((resolve, reject) => {
    console.log("I am Promise 1");
  });
  new Promise((resolve, reject) => {
    console.log("I am Promise 2");
  });
};
main();
