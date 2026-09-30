## Express

1. create project folder
2. goto project and open terminal
3. execute 'npm init -y'
4. install 'mpm i nodemon -D'
5. open package.json
   a. change 'type:module'
   b. update script {
   "start" : "node prg1.js",
   "dev" : "nodemon prg1.js"
   }
6. create prg1.js in folder
7. aqdd folderName/node_modules in .gitignore

'send' 1. send function is used to revert back content to the client, it maybe HTML,JSON,HTML File,Plain Text. 2. we can also add status code with status function, it can be chained with send function.

## MAP

- This Function is used to iterate any array, it must return new array

  ```
  array.map((item)=>{
     return;
  })

  array.map((item)=>())
  ```

  in first syntex we have to use explicit return keyword wheareas in syntex 2 doesn't require.

- Exclude number for properties from any JSON Object
  ```
  const {p1,p1,...rest} = product;
  log(rest);
  ```
- Search
  to search any Item in JSON array we use find method, it will return null on unsuccessful or object on successful
  ```
  arrray.find((item)=>item.id === id);
  ```
