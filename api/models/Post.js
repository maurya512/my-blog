// ! import mongoose
const mongoose = require('mongoose');

// ! generate a new schema with the following input types
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    postPic: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true,
    },
    categories: {
        type: Array,
        required: true
    }
},
    { timestamps: true }
)

// ! exporting the post model
module.exports = mongoose.model("Post", postSchema)