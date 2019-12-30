const User = require("../models/users.model");

module.exports.index = async (req, res) => {
    const users = await User.find();
    res.render('../views/users/index.pug',{
        users : users
    });
};

module.exports.createUser = (req, res) => {
    res.render('../views/users/user.create.pug');
}

module.exports.postCreateUser = async (req, res) => {
    try{
        const body = req.body;
        req.body.image = req.file.path.split('\\').slice(1).join('/');
        await User.create(body);
        res.redirect("/user");
    }catch(err){

    }
}