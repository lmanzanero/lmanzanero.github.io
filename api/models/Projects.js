const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Project Schema
const ProjectSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
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
