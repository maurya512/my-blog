// ! require express
const router = require("express").Router();

// * import the schemas 
const User = require("../models/User");

// ! import bcrypt
const bcrypt = require("bcrypt");

// ! Routes to update the user
// * updating the user based on their user id
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        // ! checks to see if the user wants to update the password
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).json(updatedUser)
        } catch (error) {
            // ! 500 status code is for errors
            res.status(500);
        }
    }
    else {
        res.status(401).json("User can only update their own account");
    }
})

// ! exporting module
module.exports = router;
