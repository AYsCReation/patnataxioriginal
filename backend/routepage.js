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
  }
});

const RoutePage = mongoose.model('RoutePage', routeSchema);

module.exports = RoutePage;
