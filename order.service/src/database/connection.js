const mysql = require('mysql');
const { CONSTANT_STRINGS } = require('../config.js') //for importing variables from .env files
const createErrors = require('http-errors')
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
    try {
        // Use the connection
        if (err) {
            console.log("DB Error" + err);
            // return next(createErrors.InternalServerError('DB Error'))
        } else {
            console.log("Connected");
        }
    } catch (error) {
        console.log("🚀 ~ file: connection.js:33 ~ error", error)

    }

});
module.exports = con
