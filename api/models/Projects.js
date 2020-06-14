const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProjectSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: Array,
    required: false,
  },
  image_url: {
    type: String,
    require: true,
  },
  link: {
      type: String,
      require: true
  }
});

module.exports = Project = mongoose.model('projects', ProjectSchema);
