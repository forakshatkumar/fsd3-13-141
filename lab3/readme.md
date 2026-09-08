## Lab 3 – JavaScript Modules

This lab focuses on working with **modular JavaScript** and organizing code across multiple files.

* `prg1.js` – First JavaScript module/script.

* `prg2.js` – Second script that works with concepts from `prg2.js`.

* `Note.txt` – Notes and instructions related to the lab.

* `Ctrl + C` – Stops the server.

## NPM - Node Package Manager

Used to install, run, and uninstall any program/project and package.

* `npm install <packageName>`

* `npm uninstall <packageName>`

To use npm, the project must be an npm project.

To create an npm project, we can use:

* `npm init -y`

* It creates a `package.json` file automatically.

* `package.json` holds all the information related to installed packages from npm.

* It also creates a folder `node_modules` automatically.

* `node_modules` holds the package/library files.

* Generally, we ignore the `node_modules` folder using `.gitignore`.

## NODEMON

It restarts the server automatically when file changes,
 * `to install`
 > npm i nodemon -D

`Note :` -D flag will install this package as developer dependency

- To execute any program, update the package.json then start the server as
    <b>npm run dev</b>
- `start` -> it will execute the app on developement
- `dev` -> it will start server in development phase(only for developer)

- `res:` it will return contents (json/html/plain) to the user/client
-  `req:` it will retrieve the information from client to the server
- server sends also statusCodes to the client, that indicates the error/success message
## Status Codes
- 200 -> Ok
- 201 -> Created
- 400 -> Bad Request
- 401 -> Unauthorized
- 403 -> information
- 404 -> Not Found
- 500 -> Internal server error

## Content Type
-  text/plain
- text/html
- application/json
- text/css
the content type and status code can be send back to client by two ways

1. `res.writHead`
2. `res.setHeader`
3. `res.statusCode`