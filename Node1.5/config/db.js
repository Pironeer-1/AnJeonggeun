require('dotenv').config()
// console.log(process.env) // remove this after you've confirmed it is working

// get the client
const mysql = require('mysql2/promise');

// create the connection to database
const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

module.exports = db;