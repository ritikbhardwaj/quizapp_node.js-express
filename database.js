const   config = require('./config/config.json'),
        mysql = require('mysql2');
// create the connection to database
const connection = mysql.createConnection({
    host: config.host,
    user: 'root',
    database: 'web',
    password: config.password
});

//Expose the connection
module.exports = connection;
