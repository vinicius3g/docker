import express from 'express';
import mysql from 'mysql';

const app = express();

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'test',
}

const connection = mysql.createConnection(config);

// Insere um registro ao iniciar o servidor
connection.query('INSERT INTO people(name) values("vinicius")', (err, result) => {
  if (err) {
    console.error('Error inserting data:', err);
    return;
  }
  console.log('Data inserted:', result);
});

app.get('/', (req, res) => {
  const sql = 'SELECT * FROM people'

  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).send('Error fetching data');
      return;
    }

    const peopleList = results.map(person => `<li>${person.name}</li>`).join('');

    console.log(peopleList)

    res.send(`
      <div>
        <h1>Full Cycle Rocks!</h1>
        <h2>People List:</h2>
        <ul>${peopleList}</ul>
      </div>
    `);
  })
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});