const express = require("express");
const homeRouter = express.Router();

homeRouter.get("/home", (req, res) =>
  res.status(200).json({ success: true, name: "Jesse Okoro", career:"Software Engineering",skills:"Android, Java, Javascript" })
);
module.exports = homeRouter