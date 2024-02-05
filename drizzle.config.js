require("dotenv").config();
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

module.exports = {
    out: "./migrations",
    schema: "./src/models/schema.js",
    driver: "mysql2",
    breakpoints: true,
    dbCredentials: {
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
        port: 3306,
    },
};
