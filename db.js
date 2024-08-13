"use strict";
/** Database setup for jobly. */
const { Client } = require("pg");
const { getDatabaseUri } = require("./config");

let db;

if (process.env.NODE_ENV === "production") {
  db = new Client({
    connectionString: getDatabaseUri(),
//    database: getDatabaseUri(),
    ssl: {
      rejectUnauthorized: false
    }
  });
} else {
  db = new Client({
    database: getDatabaseUri(),
    user: 'robleo',
    password: 'pass',
    //    connectionString: getDatabaseUri()
  });
}

db.connect();

module.exports = db;