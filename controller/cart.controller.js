var Product = require("../models/products.model");
var Cart = require("../models/session.model");
var session = require('express-session');

module.exports.addToCartProduct = (req, res) => {
    var productId = req.params.id;
    var cart = new Cart( (req.session.cart) ? req.session.cart : {} );

    Product.findById(productId, function(err, product){
    if(err) {
      return res.redirect('/');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('../view/index.pug');
  });   
};
