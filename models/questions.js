var db = require('./mongo').db
    ,mongoose = require('mongoose');

var multiChoiceQuestionSchema = mongoose.Schema({
    key:Number,
    language:String,
    question:String,
    options:[{
        text:String,
        correct:Boolean
    }],
    timesAttempted:Number,
    timesCorrect:Number
});

var fillInBlankQuestionSchema = mongoose.Schema({
    key:Number,
    language:String,
    questionBeginning:String,
    answer:String,  //The idea here is you have a sentence with a text input somewhere inside.Maybe the sentence is split in half, maybe the end is just a period...
    questionEnd:String,
    timesAttempted:Number,
    timesCorrect:Number
});


exports.multiChoice = db.model('mcquestion', multiChoiceQuestionSchema); 
exports.fillInBlank = db.model('fibquestion', fillInBlankQuestionSchema); 