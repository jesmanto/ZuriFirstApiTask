/**
 * 1. Create a connection to Mongodb
 * 2. Start a local db connection
 */

const mongoose = require("mongoose");
require("dotenv").config();
const { MONGO_URI } = process.env;
const db = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    mongoose.connect(db, {
          useNewUrlParser: true
      }, () => {
          console.log("DB connection successful...");
      });
  } catch (err) {
    console.error(err.message);
    process.exit(1)
  }
};

module.exports = connectDB;