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

export const deleteProducts = (pid) =>{
    
}
