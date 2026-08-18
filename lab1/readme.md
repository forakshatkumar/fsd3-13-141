#Event Loop

JS is single threaded, synchronus language

# FS(file system)-Node JS's Library

node library that doesnt communicate with browser it directly interacts with client os

## Major task of FS module

- Reading and writing files
  - readFile()
  - writeFile()
  - APPENDFILE()

- Directory management
  - mkdir()
  - rmdir() - depricated
  - rm()
  - readdir()

- Metadata / information
  - stat()
  - lstat()
  - fstat()

- Watching for changes
  - watch()
  - watchFile()
  - unwatchFile()

- Streaming Large files
  - createReadStream()
  - createWriteStream()

- File Operations
  - rename()
  - truncte()
  - unlink()
  - link()
  - syslink()

## Crud Operation

**Item**
each item (id,name,price,qty)

**feature :**

1. Add to Cart
2. Show Cart
3. Remove from Cart
4. Update Quantity
5. Checkout

**NOTE :** All items will be stored in hdd, so after termination of program we can retrieve cart details

**Required Files**

- Crud.js - it contains all the methods and entry points
- products.json (JavaScript object Notation) - it contains the product details in array form.
