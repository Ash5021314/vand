const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const { doorsRoutes, messageRoutes, adminRoutes } = require("./src/routes");
let cron = require("./src/utils/token_issuer");
cron.start();
require("dotenv").config();
require("./config/db");

app.use(express.static(path.join(__dirname, "src/public")));
app.use(bodyParser.json());

app.use("/doors", doorsRoutes);
app.use("/messages", messageRoutes);
app.use("/admin", adminRoutes);

app.use((req, res, next) => {
  res.status(404).send({ success: false, msg: "Wrong Url Path" });
});

module.exports = app;
