const express = require('express');
const router = express.Router();
const {Ques} = require("../database");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("login");
});

//Get route for the quiz page
router.get('/quiz',function(req,res){

  const obj = {
    username : req.query.username,
    roll_number: req.query.roll_number
  }

  //query the database
  Ques.findAll({
    attributes: ['qid', 'qtext', 'options']
  }).then((questions) => { 
    obj.questions = questions;
    res.render('quiz', { username: obj.username, roll_number: obj.roll_number, questions: obj.questions });
  });
  
});


module.exports = router;
