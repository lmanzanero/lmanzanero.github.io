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
  img_url: {
    type: String,
    require: true,
  },
  url: {
      type: String,
      require: true
  }
});

module.exports = Project = mongoose.model('projects', ProjectSchema);
