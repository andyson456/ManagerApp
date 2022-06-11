const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "58145814",
    host: "localhost",
    port: "5432",
    database: "managerapp"
});

module.exports = pool;