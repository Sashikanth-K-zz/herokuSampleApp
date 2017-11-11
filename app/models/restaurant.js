const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RestuarantSchema = new Schema({
    borough : String,
    cuisine : String,
    name : String,
    restaurant_id : String,
    grades : Array,
    address : {
        building : String,
        street : String,
        zipcode : String,
        coord : Array
    }
});

mongoose.model('Restaurant',RestuarantSchema);