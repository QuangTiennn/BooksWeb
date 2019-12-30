var User = require("../models/users.model");
// var md5 = require('md5');

module.exports.login = (req, res) =>{
    res.render('../views/auth/login.pug');
};

module.exports.postLogin = async (req, res) =>{
    var email = req.body.email;
    var password = req.body.password;
    var user = await User.findOne({email:email});
    if(!user){
        res.render('../views/auth/login.pug',{
            error : [
                "user does not exist !"
            ],
            values: req.body
        });
        return;
    }

    if(user.password !== password){
        res.render('../views/auth/login.pug',{
            error : [
                "wrong password !"
            ],
            values: req.body
        });
        return; 
    }
    res.cookie('userID', user._id,{
        signed: true
    });
    res.redirect('/');
};

module.exports.registration = (req, res) => {
    res.render("../views/auth/registration.pug");
}

module.exports.postRegistration = async (req, res,next) => {
    try{
        const body = req.body;
        req.body.image = req.file.path.split('\\').slice(1).join('/');
        await User.create(body);
        res.redirect('/auth/login')
    }catch(err){

    }
}