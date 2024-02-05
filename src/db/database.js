const mysql = require("mysql2");
const { drizzle } = require("drizzle-orm/mysql2");
require("dotenv").config();
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
});

const db = drizzle(connection);

module.exports = db;
