const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "DELLILAa26",
  database: "skilvul",
});

module.exports = connection;
