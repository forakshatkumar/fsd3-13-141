import readline from "readline/promises";
import { stdin, stdout } from "process";
import { writeFile, readFile } from "fs/promises";
import { setTimeout } from "timers/promises";

const FILE = new URL("./products.json", import.meta.url);

const saveCart = async (cart) => {
  await writeFile(FILE, JSON.stringify(cart, null, 2));
};
const getCart = async () => {
  const data = await readFile(FILE, "utf-8");
  return JSON.parse(data);
};

const addtoCart = async (item) => {
  const products = await getCart();
  products.push(item);
  await saveCart(products);
};

const showCart = () => {
  console.log("Show Cart 🛒");
};
const updateCart = () => {
  console.log("Update Cart ⏫");
};
const deletefromCart = () => {
  console.log("Delete from Cart ❌");
};

const main = async () => {
  const cin = readline.createInterface({ input: stdin, output: stdout });
  let choice;
  do {
    console.log("\nWelcome to Amazon 🛒");
    console.log("1----Add to Cart");
    console.log("2----Show Cart");
    console.log("3----Remove Item");
    console.log("4----Update Quantity");
    console.log("5----Checkout");

    choice = await cin.question("Enter your choice : ");

    switch (Number(choice)) {
      case 1:
        const Details = await cin.question("Enter Id,Name,Price,qty: ");
        console.log(Details);
        break;
      case 2:
        showCart();
        break;
      case 3:
        deletefromCart();
        break;
      case 4:
        updateCart();
        break;
      case 5:
        console.log("Checking out... Thank you for shopping! 😄");
        break;
      default:
        console.log("Invalid Choice, Try again later 🙃");
    }
    if (choice !== "5") {
      console.log("\n⏳ Loading next menu in 2 seconds...");
      await setTimeout(2000);
    }
  } while (choice !== "5");

  cin.close();
};

main();
