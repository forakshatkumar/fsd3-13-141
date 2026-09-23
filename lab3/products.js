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

let nextId = 3;
export const getAllProducts = () => {
  return products;
};

export const addProducts = (item) => {
  item.id = nextId;
  nextId++;
  products.push(item);
  return item;
};

export const deleteProduct = (pid) => {
  const item = products.findIndex((prd) => prd.id === pid);
  if (item == -1) return false;
  products.splice(item, 1);
  console.log("products remaining :", products);
  return true;
};
export const updateProduct = (pid) =>{
  
}
// create a function to update any product given pid call this fucntion in prg6
//  and verify its working by echoAPI