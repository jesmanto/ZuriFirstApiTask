const express = require('express');
const homeRouter = express.Router();

homeRouter.get("/home",(req,res)=>{
    res.json({message: "Welcome to my portfolio"})
})

module.exports = homeRouter