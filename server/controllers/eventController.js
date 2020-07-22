const db = require('../db/db.js');

const eventController = {};

// currently grabs only the events created by the current user
// NEED TO ADD THE EVENTS THAT THE CURRENT USER IS A PARTICIPANT OF
// ALSO SEND BACK ALL THE DETAILS FOR AN EVENT INSTEAD OF JUST NAME LOCATION DATE
eventController.getUserEvents = (req, res, next) => {
  //const { username } = req.params;
  let username;
  req.body.username
    ? (username = res.locals.username)
    : (username = req.params.username);

  let queryString =
    'SELECT events.creator as creator, events.description as description, events.location as location, events.date as date, events._id as event_id, events.name as event_name FROM events WHERE u.username = $1';

  let params = [username];

  db.query(queryString, params, (err, response) => {
    if (err) {
      console.log('error in getting events for particular user', err);
      return next(err);
    }
    console.log('response', response.rows);
    res.locals.allEvents = response.rows;
    return next();
  });
};

eventController.addCreatorToEvent = (req, res, next) => {
  const { username } = req.params;
  const event = res.locals.eventID;
  console.log('event', event);

  let queryString = `INSERT INTO event_participants (user_username, event_id) VALUES ($1, $2)`;

  let params = [username, event];

  db.query(queryString, params, (err, response) => {
    if (err) {
      console.log('error in adding creator to event', err);
      return next(err);
    }
    return next();
  });
};

// TODO : adds a new event by current user
eventController.addNewEvent = (req, res, next) => {
  const { username } = req.params;
  const { name, creator, description, location, date } = req.body;

  let queryString = `INSERT INTO events (name, creator, username, description, location, date) VALUES ($1, $2, $3, $4, $5, $6) RETURNING (events._id)`;

  let params = [name, creator, username, description, location, date];

  db.query(queryString, params, (err, response) => {
    if (err) {
      console.log('error in creating new event', err);
      return next(err);
    }

    res.locals.eventID = response.rows[0]._id;
    return next();
  });
};

// TODO : edits an existing event
eventController.editEvent = (req, res, next) => {
  const { username, event } = req.params;
  const { name, creator, description, location, date } = req.body;

  // 'event name' and columns and values have to be changed accordingly
  let queryString = `UPDATE events SET name = $1, creator = $2, description = $3, location = $4, date = $5 WHERE events._id = $6`;

  let params = [name, creator, description, location, date, event];

  db.query(queryString, params, (err, response) => {
    if (err) {
      console.log('Error in query for editing event, ', err);
      return next(err);
    }
    return next();
  });
};

eventController.deleteEvent = (req, res, next) => {
  const { username, event } = req.params;
  // "id" needs to be changed to current event _id
  let queryString = `DELETE FROM events WHERE events._id = $1`;

  let params = [event];

  db.query(queryString, params, (err, response) => {
    if (err) {
      console.log('error in deleting an event', err);
      return next(err);
    }
    console.log('successfully deleted event', response.rows);
    return next();
  });
};

eventController.addParticipants = (req, res, next) => {
  const { username, event } = req.params;
  const { guests } = req.body;
  guests.split('');

  let queryString = ``;
};

// controller to grab all participants for an event
eventController.getParticipants = (req, res, next) => {
  const { id, event } = req.params;
  // "1" needs to be changed to the specific event_id in event_participants table
  let queryString = `SELECT users.name FROM users INNER JOIN event_participants ep ON ep.user_username = users.username WHERE ep.event_id = $1`;

  let params = [event];

  db.query(queryString, params, (err, response) => {
    if (err) {
      console.log('error in getting participants for an event', err);
      return next(err);
    }
    console.log('got participants', response.rows);
    res.locals.participants = response.rows;
    return next();
  });
};

module.exports = eventController;
