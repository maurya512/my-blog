// ! create express server
const express = require('express');

// ! initialize the app using express
const app = express();

// ! dotenv config
const dotenv = require("dotenv");

// ! mongoose config
const mongoose = require("mongoose");

dotenv.config();

// ! to enable the app to send data in json 
app.use(express.json());
// ! backend routes config
const authRoute = require("../api/routes/auth")
const userRoute = require("../api/routes/user")


// ! establish a connection to mongoose
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: true
}).then(console.log("mongoose connection established")).catch((err) => console.log(err))

// * define routes 
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

// ! define port
// const PORT = 5000;

// ! listen for the app
app.listen("5000", () => {
    console.log("Server is running")
});
