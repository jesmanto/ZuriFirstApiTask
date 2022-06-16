const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config;
const { PORT } = process.env
const connectDB = require('./db')
const homeRouter = require("./routes/home.js");
const port = process.env.PORT || PORT;

connectDB();
// initialize express server
const app = express();

// Initialize Express middleware
app.use(homeRouter);

app.listen(port, () => {
  console.log("Port started");
});
