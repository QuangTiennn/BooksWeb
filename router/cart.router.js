const express = require('express');
const controller = require("../controller/cart.controller");

const router = express.Router();
const Cart = require("../models/session.model");


router.get('/shop/:id', controller.addToCartProduct);

// router.get('/add/:id',controller.add);

// router.get('/reduce/:id', controller.reduce);


// router.get('/remove/:id',controller.remove);


// router.get('/shopping-cart', controller.cart);

// router.get('/checkout', controller.checkoutGet);

// router.post('/checkout', controller.checkoutPost);

module.exports = router;