const express = require('express');
// const connectDB = require('./db')
const homeRouter = require('./routes/home')
const PORT = 3000;
// connect db
// connectDB();
// initialize express server
const app = express();

// Initialize Express middleware
app.use(homeRouter);

// create a basic route
// app.get('/home', (req,res)=>res.json({message: "Welcome to my portfolio"}));
// app.get('/about', (req,res)=>res.json({message: "This screen is about me"}));

app.listen(PORT, ()=>{
    console.log("Port started");
})