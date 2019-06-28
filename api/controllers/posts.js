const mongoose = require("mongoose");
const Post = require('../models/Post');

exports.all_posts = (req, res, next ) => {
    // res.json({msg: "Posts api here"});
     Post.find()
        .then(posts => res.json(posts))
        .catch(err => res.status(404).json({ nopostsfound: 'No posts found' }));
}