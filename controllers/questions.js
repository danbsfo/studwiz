var questions = require('../models/questions');

exports.getfillInBlank = function(req, res){
    var key = Math.random();
    var language = req.params.lang;
    var query = questions.fillInBlank.find({language:language})
                .where('key').gte(key)
                .sort('-key').limit(1);
    query.exec(function(err,question){
        if(err){
            console.log('Error w/ getfillInBlank: ',err);
            res.render('fourohfour');
        }
        res.render('fillInBlank',question);
    });
};

exports.getmultiChoice = function(req, res){

};

exports.createfillInBlank = function(req, res){


};

exports.createmultiChoice = function(req, res){

};

exports.saveNewQuestion = function(req, res){


};
