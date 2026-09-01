# Node.js Lab Repository

This repository contains my **Node.js lab exercises and practical work**. It covers the fundamentals of Node.js, the event loop, CRUD operations, JSON-based data handling, and modular JavaScript.

## 📁 Repository Structure

```text
├── lab1/
│   ├── eventloop.js
│   ├── hello.js
│   ├── index.js
│   └── readme.md
│
├── lab2/
│   ├── crud.js
│   └── products.json
│
└── lab3/
    ├── one.js
    ├── two.js
    └── Note.txt
```

## Lab 1 – Node.js Basics & Event Loop

This lab focuses on introductory Node.js concepts and understanding how the **Node.js Event Loop** works.

* `eventloop.js` – Demonstrates the working of the Node.js event loop.
* `hello.js` – Basic introductory Node.js program.
* `index.js` – Main execution file for the lab.
* `readme.md` – Lab-specific instructions and documentation.

## Lab 2 – CRUD Operations

This lab focuses on handling data and implementing basic **CRUD operations**.

CRUD stands for:

* **C** – Create
* **R** – Read
* **U** – Update
* **D** – Delete

Files:

* `crud.js` – Contains the implementation of CRUD operations.
* `products.json` – Acts as a simple JSON-based data source/database.

## Lab 3 – JavaScript Modules

This lab focuses on working with **modular JavaScript** and organizing code across multiple files.

* `one.js` – First JavaScript module/script.
* `two.js` – Second script that works with concepts from `one.js`.
* `Note.txt` – Notes and instructions related to the lab.
* `Crl + c`  - Stops the Server

## NPM - Node Package Manager

Used to Install, run, uninstall any program/project and package
-npm install <packageName>
-npm uninstall <packageName>

to use npm, project must be npm project
to create npm project we can use

- npm init -y
- it creates a package.json file automatically package.json holds all the information related to install packages from npm
- it also creates a folder node_modules automatically
-  node_modules holds the package/library files
- generally we ignore the node_modules by .gitignore


## 🛠️ Technologies Used

* JavaScript
* Node.js
* JSON
* File System Operations
* Node.js Modules

## ▶️ Running the Programs

Make sure **Node.js** is installed on your system.

Navigate to the required lab directory and run:

```bash
node filename.js
```

For example:

```bash
cd lab1
node index.js
```

## 📚 Concepts Covered

* Node.js fundamentals
* Node.js Event Loop
* Asynchronous JavaScript
* File handling
* JSON data handling
* CRUD operations
* JavaScript modules
* Code organization

## 🎯 Purpose

The purpose of this repository is to document my Node.js lab work and practice the fundamental concepts required for backend development using Node.js.
