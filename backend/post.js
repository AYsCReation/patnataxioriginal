// post.js

const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  file: {
    type: String, // Store the file path for uploaded images.
    default: '', // Default value is an empty string.
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  author:{
    type:String, 
    required: true,
  },
  cover:{
    type: String,
    
  }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
