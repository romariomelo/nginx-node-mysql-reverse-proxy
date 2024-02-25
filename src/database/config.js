const mysql = require('mysql2/promise');

const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'app_db',
});

module.exports = connection;
