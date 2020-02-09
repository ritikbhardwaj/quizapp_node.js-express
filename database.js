const   config = require('./config/config.json'),
        sql_promise = require('./utils/sql_wrapper')

let configObj = {
    host: config.host,
    user: 'root',
    database: 'web',
    password: config.password
}
// create the connection to database
const sql = new sql_promise(configObj)
//Expose the connection
module.exports = sql;
