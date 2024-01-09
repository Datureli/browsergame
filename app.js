const mysql = require('mysql');

// Konfiguracja połączenia z bazą danych
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Twój użytkownik
  password: 'password', // Twoje hasło
  database: 'mydatabase', // Nazwa Twojej bazy danych
});

// Nawiązanie połączenia
connection.connect((err) => {
  if (err) {
    console.error('Błąd połączenia z bazą danych:', err);
    throw err;
  }
  console.log('Połączenie z bazą danych MySQL udane!');
});

// Lista imion do dodania
const namesToAdd = ['Anna', 'Jan', 'Maria', 'Piotr', 'Katarzyna', 'Tomasz', 'Ewa', 'Marcin', 'Magdalena', 'Adam'];

// Przygotuj zapytanie SQL do dodania imion
const sqlInsertQuery = 'INSERT INTO people (name) VALUES ?';

// Wykonaj zapytanie z listą imion
connection.query(sqlInsertQuery, [namesToAdd.map(name => [name])], (err, results) => {
  if (err) {
    console.error('Błąd dodawania imion:', err);
    throw err;
  }
  console.log('Imiona zostały dodane do bazy danych!');
  
  // Zamknij połączenie po dodaniu imion
  connection.end((err) => {
    if (err) {
      console.error('Błąd zamykania połączenia:', err);
      throw err;
    }
    console.log('Połączenie z bazą danych MySQL zakończone.');
  });
});
