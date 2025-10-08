const mysql = require('mysql2');

// Use your DB credentials
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',         // your DB username
  password: 'Danfeli0220',  // your DB password
  database: 'shinobi_strength'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('✅ Connected to MySQL');
});

module.exports = connection;

