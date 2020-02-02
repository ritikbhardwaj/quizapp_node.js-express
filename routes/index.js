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
    res.render('quiz', { username: obj.username, roll_number: obj.roll_number, questions});
  });
  
});

router.post('/quiz',function(req,res){
  let marks = 0;
  let queryObj = {};
  let reqarr = [];
  let actualarr = [];
  
   qry = Ques.findAll({
    attributes: ['qid', 'answer']
  })
  .then((questions) => {
    questions.forEach(element => {
      queryObj[element.qid] = element.answer;
    });

    Object.values(queryObj).forEach((value) => {
      actualarr.push(value);
    });

    Object.values(req.body).forEach((value) => {
      reqarr.push(value);
    });
    for (let i = 0; i < reqarr.length; i++) {
      if (reqarr[i] == actualarr[i]) {
        marks += 1;
      }
    }
  })

  setTimeout(function(){
    let obj = {
      name: req.body.name,
      roll_number: parseInt(req.body.roll_number),
      marks: marks,
      arr1: reqarr,
      arr2: actualarr,
      roll_number: req.body.roll_number,
      pof: pof(marks, 30)
    }
    res.json(obj);
  },1000);

  function pof(marks, criteria){
    if((marks/reqarr.length)*100 > criteria){
      return 1;
    }else{
      return 0;
    }
  }

});


module.exports = router;
