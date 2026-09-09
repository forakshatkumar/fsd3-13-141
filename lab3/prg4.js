import http from "http";
import { reviews } from "./data.js";

const server = http.createServer((req, res) => {
  const products = {
    id: 1,
    name: "Mobile",
    price: 27000,
    rating: 4.7,
    review: 225,
  };
  const items = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 2499,
      image: "https://placehold.co/300x300?text=Headphones",
      disc: "Comfortable wireless headphones with clear sound and long battery life.",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 3999,
      image: "https://placehold.co/300x300?text=Smart+Watch",
      disc: "Stylish smartwatch with fitness tracking and notification support.",
    },
    {
      id: 3,
      name: "Gaming Mouse",
      price: 1299,
      image: "https://placehold.co/300x300?text=Gaming+Mouse",
      disc: "Ergonomic gaming mouse with adjustable DPI and responsive controls.",
    },
    {
      id: 4,
      name: "Mechanical Keyboard",
      price: 3499,
      image: "https://placehold.co/300x300?text=Keyboard",
      disc: "Mechanical keyboard with tactile switches and backlit keys.",
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      price: 1999,
      image: "https://placehold.co/300x300?text=Speaker",
      disc: "Portable Bluetooth speaker with powerful sound and compact design.",
    },
    {
      id: 6,
      name: "Laptop Stand",
      price: 999,
      image: "https://placehold.co/300x300?text=Laptop+Stand",
      disc: "Adjustable laptop stand designed for comfortable desk setups.",
    },
    {
      id: 7,
      name: "Power Bank",
      price: 1499,
      image: "https://placehold.co/300x300?text=Power+Bank",
      disc: "10000mAh portable power bank with fast charging support.",
    },
    {
      id: 8,
      name: "USB-C Hub",
      price: 1799,
      image: "https://placehold.co/300x300?text=USB-C+Hub",
      disc: "Multi-port USB-C hub for connecting multiple devices.",
    },
    {
      id: 9,
      name: "Webcam",
      price: 2299,
      image: "https://placehold.co/300x300?text=Webcam",
      disc: "Full HD webcam suitable for video calls, meetings and streaming.",
    },
    {
      id: 10,
      name: "Desk Lamp",
      price: 899,
      image: "https://placehold.co/300x300?text=Desk+Lamp",
      disc: "Minimal LED desk lamp with adjustable brightness.",
    },
  ];

  if (req.url === "/api/products") {
    res.end(JSON.stringify(items));
  } else if (req.url === "/api/review") {
    res.end(JSON.stringify(reviews));
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(4000, () => console.log("prg4 is running 4000..."));
