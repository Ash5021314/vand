const express = require("express");
require('dotenv').config();
require('./configs/db');
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const { itemRoutes } = require("./routes");

app.use(express.static(path.join(__dirname,"public")));
app.use(bodyParser.json());

app.use("/items",itemRoutes);

module.exports = app;