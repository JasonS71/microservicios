const mysql = require('mysql');

var pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "bd_microservicios"
});

exports.pool = pool;
