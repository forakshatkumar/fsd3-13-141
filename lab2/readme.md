# FS(file system)-Node JS's Library
 
  node library that doesnt communicate with browser it  directly interacts with client os
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



## CRUD Operation

Create/Insert , Read/Retrieve , Update , Delete 

# Item 
(id,name,price,qty)

## Operations
1. Add to Cart
2. Show Cart
3. Remove item from Cart
4. Update Quantity
5. checkout
    NOTE : all items will be stored in hdd, so after termination of program we can retrieve cart details ;

## Required files   
- crud.js - it contains all the methods and entry point 
- products.json - it contains the product details in array form