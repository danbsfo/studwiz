var db = require('./mongo').db
    ,mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    uuid:String,
    passHash:String,
    googleID:String,
    givenName:String,
    displayName:String
    //etc ...
});

exports.users = db.model('user',userSchema); //Mongoose automatically makes these plural; setting the name to "users" will 
                                             //probably lead to a "userss" collection being generated ....

