const mysql = require('mysql');
const {CONSTANT_STRINGS} = require('../config.js') //for importing variables from .env files

console.log("host:", CONSTANT_STRINGS.HOST,
    " user:", CONSTANT_STRINGS.DB_USERNAME,
    "password:", CONSTANT_STRINGS.DB_PASSWORD,
    "  database:", CONSTANT_STRINGS.DB_NAME,);

const con = mysql.createPool({
    connectionLimit: 1000,
    connectTimeout: 60 * 60 * 1000,
    acquireTimeout: 60 * 60 * 1000,
    timeout: 60 * 60 * 1000,
    host: CONSTANT_STRINGS.HOST,
    user: CONSTANT_STRINGS.DB_USERNAME,
    password: CONSTANT_STRINGS.DB_PASSWORD,
    database: CONSTANT_STRINGS.DB_NAME,
    debug: false,
    multipleStatements: true,
});
console.log("--------------------------", process.env.DB_NAME);

con.getConnection(function (err, connection) {

    // Use the connection
    if (err) {
        console.log("DB Error" + err);
    } else {
        console.log("Connected");
    }
});
module.exports = con
