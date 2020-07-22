const { Pool } = require('pg');
require('dotenv').config();

// sean use environment variables
const PG_URI = process.env.PG_PW;

const pool = new Pool({
  connectionString: PG_URI,
});

/*
CREATE TABLE events (
  _id           serial PRIMARY KEY,
  name          VARCHAR NOT NULL,
  creator       VARCHAR NOT NULL,
  username      VARCHAR NOT NULL,
  description   VARCHAR NOT NULL,
  location      VARCHAR,
  date          VARCHAR
);

CREATE TABLE users (
  _id   serial PRIMARY KEY,
  name  VARCHAR NOT NULL,
  email VARCHAR UNIQUE NOT NULL,
  username VARCHAR UNIQUE NOT NULL,
  password VARCHAR NOT NULL
);

CREATE TABLE event_participants (
  _id serial PRIMARY KEY,
  user_username VARCHAR NOT NULL,
  event_id      INT NOT NULL,
  FOREIGN KEY (user_username) REFERENCES users(username),
  FOREIGN KEY (event_id) REFERENCES events(_id)
);
*/

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
