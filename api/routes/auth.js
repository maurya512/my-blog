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

// ! login routes 
router.post("/login", async (req, res) => {
    try {
        // ! find the username with their id 
        const user = await User.findOne({ username: req.body.username })
        // ! if no user found send an error message
        if(!user) {
            return res.status(400).json("Wrong Credentials")
        }

        // ! compares the password entered by the user and the password stored in the database
        const validate = await bcrypt.compare(req.body.password, user.password)
        // ! if user not validated send an error message
        // !validate && res.status(400).json("Please Enter Correct Password");
        if(!validate) {
            return res.status(400).json("Please Enter The Correct Password")
        }

        // ! doesn't send the hashed password to the back end using the ._doc extension
        const { password, ...others} = user._doc;

        // ! if everything is as required send all the data except the user's password
        res.status(200).json(others);
    } catch (error) {
        res.status(500).json(error);
    }
})

// ! exporting module
module.exports = router;
