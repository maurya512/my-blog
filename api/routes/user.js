// ! require express
const router = require("express").Router();

// * import the schemas 
const User = require("../models/User");

// ! import bcrypt
const bcrypt = require("bcrypt");

// ! import posts 
const Post = require("../models/Post");

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
            // ! updates the user with new information that was changed 
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
                // ! displays the updated info for user 
            }, { new: true });
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

// ! Delete the user 
// * deleting the user based on the id provided in the url
router.delete("/:id", async (req, res) => {
    // ! verifying whether the user is in the database
    if (req.body.userId === req.params.id) {
        // ! get and delete all posts of user
        try {
            const user = await User.findById(req.params.id);
            try {
                // ! if a user is found delete the user and display a message to the user
                await Post.deleteMany({ username: user.username })
                await User.findByIdAndDelete(req.params.id)
                res.status(200).json("User has been deleted");
            } catch (err) {
                res.status(500).json(err)
            }
        } catch (err) {
            res.status(404).json("User not found");
        }
    }
    else {
        res.status(401).json("You can only delete your account");
    }
});

// ! Get User
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc
        res.status(200).json(others)
    } catch (err) {
        res.status(500).json(err)
    }
})


// ! exporting module 
module.exports = router;
