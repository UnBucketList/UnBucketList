const { Pool } = require('pg');

// sean use environment variables
const PG_URI =
  'postgres://tcfeqkmq:Fy6Ohg2-c-kX5_cZUr4yDELJrdbdCLkJ@ruby.db.elephantsql.com:5432/tcfeqkmq';

const pool = new Pool({
  connectionString: PG_URI,
});

/*
CREATE TABLE events (
  _id           serial PRIMARY KEY,
  name          VARCHAR NOT NULL,
  creator       VARCHAR UNIQUE NOT NULL,
  description   VARCHAR NOT NULL,
  location      VARCHAR,
  date          DATE
)
CREATE TABLE users (
  _id   serial PRIMARY KEY,
  name  VARCHAR NOT NULL,
  email VARCHAR UNIQUE NOT NULL,
  username VARCHAR UNIQUE NOT NULL,
  password VARCHAR NOT NULL
)
CREATE TABLE event_participants (
  _id serial PRIMARY KEY,
  user_id       INT NOT NULL,
  event_id      INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(_id),
  FOREIGN KEY (event_id) REFERENCES events(_id)
)
*/

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
