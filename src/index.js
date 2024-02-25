const express = require('express');
const mysql = require('mysql2');

// const connection = require('./database/config');
const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'app_db',
});

connection.query("INSERT INTO `people` (name) values ('Jane Doe')");

let result = [];

connection.query('SELECT * FROM people', function (err, results) {
  if (err) {
    throw err;
  }
  result = results;
});

const app = express();

const port = 3000;

app.get('/', async (_, resp) => {
  let body = '<h1>Full Cycle Rocks!</h1>';
  body += '<h3>Lista de nomes cadastrada no banco de dados.</h3>';
  body += '<ul>';
  for (const people of result) {
    body += `<li>${people.name}</li>`;
  }
  body += '</ul>';
  resp.send(body);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
