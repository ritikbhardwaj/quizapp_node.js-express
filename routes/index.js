const express = require('express')
const router = express.Router()
const {Ques,User,Result} = require('../database')
const {sequelize} = require('../database')
/* GET home page. */
router.get('/', function(req, res) {
  res.render('login')
})
/* GET quiz page */
router.get('/quiz',function(req,res){
  const obj = {
    username : req.query.username,
    roll_number: req.query.roll_number
  }
  //query the database
  Ques.findAll({
    attributes: ['qid', 'qtext', 'options']
  }).then((questions) => { 
    obj.questions = questions
    res.render('quiz', { username: obj.username, roll_number: obj.roll_number, questions})
  }) 
})
/* POST  */
router.post('/quiz',function(req,res){
  console.log(req.body)
  var marks = 0 //marks for the answers
  var reqarr = Object.values(req.body.answers)
  var actualarr = []
  var criteria = 30;

  (async function process(){
    await Ques.findAll({
      attributes: ['qid', 'answer']
    })
    .then((questions)=>{
      questions.forEach(question => {
        actualarr.push(question.answer);
      })
      //calculate marks
      for (let i = 0; i < reqarr.length; i++) {
        if (parseInt(reqarr[i]) == actualarr[i]) {
          marks += 1
        }
      }
    }).catch(e =>{console.log(e)})
    //final object
    let obj = {
      name: req.body.name,
      roll_number: parseInt(req.body.roll_number),
      marks: marks,
      arr1: reqarr,
      arr2: actualarr,
      roll_number: req.body.roll_number,
      pof: pof(marks, criteria)
    }
    //insert into database
    await sequelize.query(
      'INSERT INTO results(roll_number,marks,pof) VALUES(:roll_number,:marks,:pof)',
      {
        replacements: {
          roll_number: obj.roll_number,
          marks: obj.marks,
          pof: obj.pof
        },
      }
    )
    .then(()=>{
      console.log(`Insert data for Roll Number : ${obj.roll_number}`)
    }).catch(e=>{console.log(e)})
    res.json(obj)
  })()
  //calculate pass or fail based on the criteria
  function pof(marks, criteria){
    if((marks/reqarr.length)*100 > criteria){
      return 1
    }else{
      return 0
    }
  }
})

module.exports = router
