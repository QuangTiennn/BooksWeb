var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    name : String,
    price: Number,
    auth: String,
    email: String,
    password: String,
    image : String,
    slug : String
});
var product = mongoose.model('product', productSchema, "products");

module.exports = product;