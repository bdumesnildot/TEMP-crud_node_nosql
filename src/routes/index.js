const express = require("express");
const app = express();

const users = require("./users.routes");
const products = require("./products.routes");
const stuff = require("./stuff.routes");

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/api/users", users);
app.use("/api/products", products);
app.use("/api/stuff", stuff);

module.exports = app;
