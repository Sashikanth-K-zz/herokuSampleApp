const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Article = mongoose.model('Article');
const Restaurant = mongoose.model('Restaurant');

module.exports = (app) => {
  app.use('/articles', router);
};

router.get('/', (req, res, next) => {
  Article.find((err, articles) => {
    if (err) return next(err);
    res.json(articles);
  });
});
