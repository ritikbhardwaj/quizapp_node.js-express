const	express = require('express'),
      router = express.Router(),
      connection = require('../database'),
      csvFile = require('../utils/csv_to_db')

router.get('/quiz',function(req,res){
  res.render('quiz',{username: req.query.username, rollNumber: req.query.rollnumber, file: csvFile})
})
/* POST  */
router.post('/quiz',function(req,res){
    console.log(req.body)
  	var marks = 0 //marks for the answers
  	var reqarr = Object.values(req.body.answers)
  	var actualarr = []
  	var criteria = 30;

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
	console.log(req.body.roll_number,marks)
	//insert result into database
	connection.execute('INSERT INTO results(rollNumber,marks) VALUES(?,?)',[req.body.roll_number,marks],function(err,results){
		if(err){
			res.send(err.sqlMessage)
		}else{
			console.log(`Inserted data for [ ${req.body.roll_number} ]`)
			res.send('Submitted successfully!')
		}
	})
})
module.exports = router
