const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema([{
    cart : String
}]);

const Session = mongoose.model('Session', sessionSchema, 'sessions');
module.exports = Session;