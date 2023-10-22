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
12. write code for express server - index.js, routes.js and 2 controllers
13. write a register endpoint in the user controler - it will be post only as we will handle such request from the client
14. we will not receive the reques on the server as the browser will detect it is already directed to another server and will hit error CORS
15. in index.js we should set headers on our server, using mdw, to allow our server to receive requests from anywhere. Alternative is to install npm i cors and require it right after the express require. We should be able to receive the data but can not read it
16. Add body-parser and json-parser mdw and we can read the data sent to us
17. Add models folder with User and Furniture
18. Create relevant Model schemas using mongoose
19. At User Model add bcrypt, use async-await function to hash the password before save using salt 10