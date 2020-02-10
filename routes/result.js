const express = require('express'),
    router = express.Router(),
    sql = require('../database'),
    csv = require('csvtojson')
var totalMarks = 0
csv()
    .fromFile('utils/test-info/questions.csv')
    .then((rows) => {
        totalMarks = rows.length
    })

router.get('/result',function(req,res){
    //query the database for the results
    sql.query('SELECT users.rollNumber,name,results.marks FROM users INNER JOIN results ON users.rollNumber = results.rollNumber ORDER BY results.marks DESC ')
    .then((rows)=>{
        res.render('result',{rows,total:totalMarks})
    }).catch((err)=>console.log(err))
})

module.exports = router