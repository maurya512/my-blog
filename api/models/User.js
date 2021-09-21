// ! import mongoose
const mongoose = require('mongoose');

// ! generate a new schema with the following input types
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        default: ""
    },
},
    { timeStamps: true }
);

// ! exporting schema
module.exports = mongoose.model("User", userSchema)