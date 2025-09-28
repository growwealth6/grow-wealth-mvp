const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./growwealth.db");

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT UNIQUE, password TEXT, wallet REAL DEFAULT 0)");
  db.run("CREATE TABLE IF NOT EXISTS investments (id INTEGER PRIMARY KEY AUTOINCREMENT, userId INTEGER, plan TEXT, amount REAL, returns REAL, status TEXT)");
  db.run("CREATE TABLE IF NOT EXISTS referrals (id INTEGER PRIMARY KEY AUTOINCREMENT, referrerId INTEGER, refereeId INTEGER)");
});

module.exports = db;