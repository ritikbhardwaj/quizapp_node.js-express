const   express = require('express')
const   path = require('path')
const   app = express()
const   indexRouter = require('./routes/quiz'),
        loginRouter = require('./routes/login'),
        resultRouter = require('./routes/result')


// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// express middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

//route
app.use('/', indexRouter)
app.use('/', loginRouter)
app.use('/', resultRouter)

module.exports = app
