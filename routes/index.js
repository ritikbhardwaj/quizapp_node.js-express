var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("login");
});

router.get('/quiz',function(req,res){
  let obj = {
    username: "Kinglolo",
    roll_number: 181000
  }
  res.render('quiz',{username: obj.username, roll_number: obj.roll_number});
});

router.post('/quiz', function (req, res) {
  console.log("Post request!");
  res.render
});

module.exports = router;
