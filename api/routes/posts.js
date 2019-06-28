const express = require('express');
const router = express.Router();

const PostController = require('../controllers/posts');

router.get('/', PostController.all_posts);


module.exports = router;