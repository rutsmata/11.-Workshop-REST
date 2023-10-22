1. cd client 
2. npm i, then npm i lite-server -D
3. in package json  "scripts": {"start": "lite-server"}
4. npm start
5. Application should be loaded at the required port
6. Open new Terminal and rename the two as client and server
7. Within the new Terminal cd server and npm init -y; then npm i nodemon -D express bcrypt jsonwebtoken
8. Add folder src and index.js within it
9. in package json   "scripts": {"start": "nodemon src/index"} and "main": "src/index.js"
10. Test with console.log 
11. npm start
12. write code for express server