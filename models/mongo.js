var dotenv = require("dotenv")
    , mongoose = require("mongoose");

dotenv.load();

//These env variables need to be defined in .env in the root dir...

var mongoURI =  "mongodb://"+process.env.MONGO_USER+":"+process.env.MONGO_PASSWORD+"@"+process.env.MONGO_SERVER+"/studwiz";

exports.db = mongoose.connect(mongoURI, config);