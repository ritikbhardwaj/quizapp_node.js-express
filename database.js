const config = require('./config/config.json')
const Sequelize = require('sequelize')
//models
const quesModel = require('./models/questions')
const optionModel = require('./models/options')
const resultModel = require('./models/results')
const userModel = require('./models/users')

const sequelize = new Sequelize({
    username: config.username,
    password: config.password,
    host: config.host,
    dialect: config.dialect,
    database: config.database
})

//model associations
userModel.hasOne(resultModel,{
    foreignKey: {
        name: 'roll_number'
    }
});
quesModel.hasMany(optionModel,{
    foreignKey:{
        name: 'qid'
    }
});


// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const db ={} 

db.sequelize = sequelize
db.Sequelize = Sequelize

//Models/tables
db.Ques = quesModel(sequelize,Sequelize)
db.Result = resultModel(sequelize, Sequelize)
db.Option = optionModel(sequelize, Sequelize)
db.User = userModel(sequelize,Sequelize)
//exposing the connection to other files
module.exports = db
