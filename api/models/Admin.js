const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    required: true
  }
});

module.exports = User = mongoose.model('user', UserSchema);