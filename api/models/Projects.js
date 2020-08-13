const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProjectSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  img_url: {
    type: String,
    require: true,
  },
  url: {
      type: String,
      require: true
  },
  category: {
    type: Array,
    required: false,
  }
});

module.exports = Project = mongoose.model('projects', ProjectSchema);
