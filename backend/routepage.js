// post.js

const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  FromRoute: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  toRoute:{
    type: String,
    required: true,
  },
  faq1: {
    que : String,
    ans : String,
  },
  faq2: {
    que : String,
    ans : String,
  },
  faq3: {
    que : String,
    ans : String,
  },
  faq4: {
    que : String,
    ans : String,
  },
  faq5: {
    que : String,
    ans : String,
  }
});

const RoutePage = mongoose.model('RoutePage', routeSchema);

module.exports = RoutePage;
