// ! importing mongoose
const mongoose = require('mongoose');

// ! generate a new schema with the following input types 
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
});


// ! exporting the schema
module.exports = mongoose.model("Category", categorySchema)