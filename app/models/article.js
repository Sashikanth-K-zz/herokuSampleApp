// Example model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: String,
  url: String,
  text: String
});



var aa = mongoose.model('Article', ArticleSchema);



