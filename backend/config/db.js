const { Pool } = require("pg");

const pool = new Pool({
  user: "dost",
  host: "localhost",
  database: "dost",
  password: "d0stregi0n1",
  port: 5432,
});

module.exports = pool;
