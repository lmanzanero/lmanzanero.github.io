const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
      type: String,
      require: true
  }
});

module.exports = Post = mongoose.model('posts', PostSchema);
