const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Article = mongoose.model('Article');
const Restaurant = mongoose.model('Restaurant');

module.exports = (app) => {
    app.use('/restaurants', router);
};

router.get('/',function (req, res, next){
    Restaurant.find(
        {},
        null,
        {
            skip: 0, 
            limit: 10,
            sort: { restaurant_id: 'desc', "address.building" : 'asc' }
        }, function (err, restaurants) {
            if (err) res.next(err);
            res.json(restaurants);
        });
});
