<<<<<<< HEAD
const express = require('express')
const path = require('path')
const app = express()
const indexRouter = require('./routes/index')
=======
const express = require('express');
const path = require('path');
const app = express();
const indexRouter = require('./routes/index');
>>>>>>> b4bb679dfaf5afb6c347870c035c0bdbd0ca6ae1

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// express middlewares
<<<<<<< HEAD
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
=======
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
>>>>>>> b4bb679dfaf5afb6c347870c035c0bdbd0ca6ae1

//route
app.use('/', indexRouter)

module.exports = app
