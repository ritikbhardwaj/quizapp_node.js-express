const { username, password, dialect, database, host } = require("./config/config.json");
const Sequelize = require("sequelize");
const questionModel = require("./models/questions");

const sequelize = new Sequelize({
    username,
    password,
    host,
    dialect,
    database
});

const Ques = questionModel(sequelize,Sequelize);
//sync the database with the model
sequelize.sync().then(() => {console.log("Database and table created!")});
//exposing the connection to other files
module.exports = {
    Ques
}