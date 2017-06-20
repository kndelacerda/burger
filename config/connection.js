// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL

// Require mysql
var mysql = require("mysql");

if (process.env.JAWSDB_URL)
    connection = mysql.createConnection(process.env.JAWSDB_URL);
else {
    var keys = require('./keys');

    connection = mysql.createConnection({
        host: keys.db.host,
        user: keys.db.user,
        password: keys.db.password,
        database: keys.db.database
    });
}

// Connects to the DB
connection.connect(function(err) {
    if (err) {
        console.error('Connection error: ' + err.stack);
        return;
    }
    console.log('Connection threadId: ' + connection.threadId);
});

// var mysql = require('mysql');
// var connection = mysql.createConnection(process.env.JAWSDB_URL);

// connection.connect();

// connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//     if (err) throw err;

//     console.log('The solution is: ', rows[0].solution);
// });

// connection.end();

module.exports = connection;

// use jawsdb