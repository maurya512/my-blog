// ! create express server
const express = require('express');

// ! initialize the app using express
const app = express();

// ! dotenv config
const dotenv = require("dotenv");

// ! mongoose config
const mongoose = require("mongoose");

dotenv.config();

// ! establish a connection to mongoose
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log("mongoose connection established")).catch((err) => console.log(err))

// * define routes 
app.use("/", (req, res) => {
    console.log("this is backend url")
})

// ! define port
const PORT = 5000;

// ! listen for the app
app.listen("5000", () => {
    console.log("Server is running")
});
