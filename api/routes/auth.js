// ! require express
const router = require("express").Router();


// ! import bcrypt to mask the password
const bcrypt = require("bcrypt");

// * import the schemas 
const User = require("../models/User");


// ! Routes to register the user
// * async function because req, res and other operations take time
router.post("/register", async (req, res) => {
    try {
        // * determin the salt length for the pwd
        const salt = await bcrypt.genSalt(10);
        // * create a new hashed pwd and assign it to a const
        const hashedPwd = await bcrypt.hash(req.body.password, salt);
        // ! try to create a new user using the data provided in the input from req.body 
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            // ! setting the hasshedpwd as the user's pwd before it gets stored into the db
            password: hashedPwd,
        });

        // ! save the new user into a const after awaiting the operation from async function
        const user = await newUser.save();

        // ! if successful send the response to the browser
        res.status(200).json(user);
    } catch (error) {
        // ! 500 status code is for errors
        res.status(500);
    }
})

// ! exporting module
module.exports = router;

// ! login routes 
// module.exports = router