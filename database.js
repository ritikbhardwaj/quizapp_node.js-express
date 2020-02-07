<<<<<<< HEAD
const config = require("./config/config.json")
const Sequelize = require("sequelize")
const questionModel = require("./models/questions")
const resultModel = require("./models/result")
=======
const config = require("./config/config.json");
const Sequelize = require("sequelize");
const questionModel = require("./models/questions");
const resultModel = require("./models/result");
>>>>>>> b4bb679dfaf5afb6c347870c035c0bdbd0ca6ae1

const sequelize = new Sequelize({
    username: config.username,
    password: config.password,
    host: config.host,
    dialect: config.dialect,
    database: config.database
<<<<<<< HEAD
})

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const db ={} 

db.sequelize = sequelize
db.Sequelize = Sequelize

//Models/tables
db.Ques = require("./models/questions")(sequelize,Sequelize)
db.Result = require("./models/result")(sequelize, Sequelize)

//exposing the connection to other files
module.exports = db
=======
});

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const db ={}; 

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//Models/tables
db.Ques = require("./models/questions")(sequelize,Sequelize);
db.Result = require("./models/result")(sequelize, Sequelize);

//exposing the connection to other files
module.exports = db;
>>>>>>> b4bb679dfaf5afb6c347870c035c0bdbd0ca6ae1
