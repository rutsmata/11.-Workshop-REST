const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const routes = require("./routes");
const {auth} = require('./middlewares/authMiddleware')

const app = express();
const PORT = 3030;

// DB Configuration
mongoose
  .connect("mongodb://127.0.0.1:27017/furnitures")
  .then(() => console.log(`Successfully connected to DB`))
  .catch((err) => console.log(`Error while connecting to DB!`, err));

// Middlewares
app.use(express.urlencoded({ extended: false })); // body-parser for urlencoded, querystring
app.use(express.json()); // json parse: application/json -> AJAX requests
app.use(cors()); // avoid CORS;
app.use(auth)

// alternative code
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "*");
//   res.setHeader("Access-Control-Allow-Headers", "*");

//   next();
// });

app.get("/", (req, res, next) => {
  res.send("Hello RESTful API");
});

app.use(routes);

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}...`));
