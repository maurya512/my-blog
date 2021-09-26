// ! import router and initialize it
const router = require("express").Router();

// ! import User model 
const User = require("../models/User");

// ! import Post model
const Post = require("../models/Post");

// * Create a post
router.post("/", async (req, res) => {
    // store the data found in input inside a const
    const newPost = new Post(req.body);
    // check to see if were able to save the new post
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});


// * Update a post
router.put("/:id", async (req, res) => {
    // ! check to see if the post is found by matching it's id
    try {
        const post = await Post.findById(req.params.id);
        // ! check if the user exists for the post to be updated
        if (post.username === req.body.username) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
                }, { new: true });
                res.status(200).json(updatedPost);
            } catch (err) {
                res.status(500).json(err);
            }
        }
        // ! if the user doesn't exist display an error message
        else {
            res.status(401).json("You can only update your post");
        }
    }
    // ! if an error found send the data
    catch (err) {
        res.status(500).json(err);
    }
});

// * Delete a post
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                await post.delete();
                res.status(200).json("Post has been deleted....");
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("You can only delete your post");
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// * Get a post
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
});

// * Get all posts
router.get("/", async (req, res) => {
    const username = req.query.user;
    const categoryName = req.query.category;

    try {
        let posts;
        if (username) {
            posts = await Post.find({ username });
        } else if (categoryName) {
            posts = await Post.find({
                categories: {
                    $in: [categoryName],
                },
            });
        } else {
            posts = await Post.find();
        }
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
});

// ! exporting the modules 
module.exports = router;

