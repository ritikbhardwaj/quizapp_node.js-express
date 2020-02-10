const express = require('express'),
    router = express.Router(),
    sql = require('../database')

router.get('/result',function(req,res){
    //query the database for the results
    sql.query('SELECT users.rollNumber,name,results.marks FROM users INNER JOIN results ON users.rollNumber = results.rollNumber ')
    .then((rows)=>{
        res.render('result',{rows})
    }).catch((err)=>console.log(err))
})

module.exports = router