const	express = require('express'),
      router = express.Router(),
      sql = require('../database'),
      csvFile = require('../utils/csv_to_db')

/* GET */
router.get('/quiz', function (req, res, next) {  //middleware 
  sql.query('SELECT name from users WHERE rollNumber = ? AND name=?', [parseInt(req.query.rollnumber),req.query.username])
    .then((rows) => {
      if(rows.length === 0){
        res.render('user_not_exist')
      }else{
        next()
      }
    }).catch(err => console.log(err)) 
},function(req,res){
  res.render('quiz',{username: req.query.username, rollNumber: req.query.rollnumber, file: csvFile})
})

/* POST  */
router.post('/quiz',function(req,res){
  	var marks = 0 //marks for the answers
  	var reqarr = Object.values(req.body.answers)
  	var actualarr = []

    //get the questions from the csv file
    csvFile.forEach((question)=>{
      if(question.answer === 'answer'){
        return
      }
      actualarr.push(parseInt(question.answer))
    })
    //calculate marks
    for(let i =0; i < reqarr.length; i++){
      if(reqarr[i] == actualarr[i]){
        marks+= 1;
      }
	}
	//insert result into database
  sql.query('INSERT INTO results(rollNumber,marks) VALUES(?,?)',[req.body.roll_number,marks])
  .then(()=>res.send('Submitted successfully!'))
  .catch((err)=>res.send(err.sqlMessage))
})
module.exports = router
