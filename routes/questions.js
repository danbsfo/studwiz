var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/questions');

//for attempting questions
router.get('/fib/:lang',ctrl.getfillInBlank);
router.get('/mc/:lang', ctrl.getmultiChoice);

//for creating new questions
router.get('/create/fib/:lang',ctrl.createfillInBlank);
router.get('/create/mc/:lang', ctrl.createmultiChoice);

//might need multiple endpoints, but saving should be pretty much the same across question type ....
router.post('/create/:type', ctrl.saveNewQuestion);

module.exports = router;