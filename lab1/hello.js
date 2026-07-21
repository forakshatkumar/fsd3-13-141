function sayhello(name) {
  console.log(`Welcome to ${name}`);
}
sayhello("Akshat Kumar");
function sum(a, b) {
  return a + b;
}
console.log(`sum of 2 and 5 is = ${sum(2, 5)}`);

//arrow head function
const sayHi = (name) => {
  console.log(`Welcome to ${name}`);
};
sayHi(`Akshat`);

const add = (a, b) => {
  console.log(`The addition is : `+ (a + b));
};
add(3, 4);

//arrow head short
const findsum = (a,b) => a+b;
console.log(`sum of 2 and 5 is = ${findsum(2, 5)}`);