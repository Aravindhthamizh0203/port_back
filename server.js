const express = require("express");
const asynchandler = require("express-async-handler");
const errorhanddler = require("./middleware/ErrorHandler");
const app = express();
const connectDb = require("./config")
const dotenv = require('dotenv').config();
connectDb();

app.use(express.json());

app.use('/message', require("./routes/messageRoute"))

app.use(errorhanddler);




app.listen(5003, () => {
    console.log("app is running in port 5003")
})











