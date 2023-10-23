const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./review_wrangler.db', (err) => {
    if(err) {
        console.error('Error connecting to the database: ', err.message);
        process.exit(1);
    }
    console.log('Connected to the SQLite database.');
});

module.exports = db;