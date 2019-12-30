var User = require("../models/users.model");

module.exports.requireAuth = (req, res, next) =>{
    if(!req.signedCookies.userID){
        res.redirect('/auth/login');
        return;
    }
    var user = User.find({id: req.signedCookies.userID});
    if(!user){
        res.redirect('/auth/login');
        return;
    }
    res.locals.user = user;
    next();
};