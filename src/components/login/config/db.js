const mysql = require("mysql2");


const db = mysql.createConnection({
    host: 'localhost',
    database: 'LoginSystem',
    user: 'root',
    password: 'S#93Browser',
});

module.exports = db;