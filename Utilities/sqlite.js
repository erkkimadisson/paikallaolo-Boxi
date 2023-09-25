const sqlite3 = require('sqlite3').verbose();
const path = require('node:path')
// you would have to import / invoke this in another file

module.exports = new sqlite3.Database(path.join(__dirname, '../database.db'), (err) => console.error(err));

