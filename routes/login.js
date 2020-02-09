const   express = require('express'),
        router = express.Router()

/* GET home page. */
router.get('/', function (req, res) {
    res.render('login')
})

module.exports = router