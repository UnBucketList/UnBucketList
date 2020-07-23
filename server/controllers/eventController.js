const db = require('../db/db.js');

const eventController = {};

// grabs all events that a user created and is a participant of
eventController.getParticipatingEvents = (req, res, next) => {
  let username;
  res.locals.username ? username = res.locals.username: username = req.params.username;

  let queryString = `
  SELECT 
  e.name, e.creator, e.username, e.description, e.location, e.date, e._id as event_id
  FROM
  events e
  INNER JOIN 
  event_participants ep
  ON 
  ep.event_id = e._id
  WHERE
  ep.user_username = $1
  `;

  let params = [username];

  db.query(queryString, params, (err, response) => {
    if (err) {
      return next(err);
    }
    //console.log('response from database', response.rows);
    res.locals.allEvents = response.rows;
    return next();
  });
};

eventController.addCreatorToEvent = (req, res, next) => {
  const { username } = req.params;
  const event = res.locals.eventID;
  //console.log('event', event);

  let queryString = `
  INSERT INTO 
  event_participants (user_username, event_id) 
  VALUES 
  ($1, $2)
  `;

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

  let queryString = `
  INSERT INTO 
  events (name, creator, username, description, location, date) 
  VALUES 
  ($1, $2, $3, $4, $5, $6) 
  RETURNING 
  events._id, events.name, events.creator, events.username, events.description, events.location, events.date
  `;

  let params = [name, creator, username, description, location, date];

  db.query(queryString, params, (err, response) => {
    if (err) {
      //console.log('error in creating new event', err);
      return next(err);
    }
    //console.log('response from adding new event', response.rows);
    res.locals.eventID = response.rows[0]._id;
    res.locals.addedEvent = response.rows[0];
    return next();
  });
};

// TODO : edits an existing event
eventController.editEvent = (req, res, next) => {
  const { username, event } = req.params;
  const { name, creator, description, location, date } = req.body;

  // 'event name' and columns and values have to be changed accordingly
  let queryString = `
  UPDATE 
  events 
  SET 
  name = $1, creator = $2, username = $3, description = $4, location = $5, date = $6 
  WHERE 
  events._id = $7
  `;

  let params = [name, creator, username, description, location, date, event];

  db.query(queryString, params, (err, response) => {
    if (err) {
      //console.log('Error in query for editing event, ', err);
      return next(err);
    }
    return next();
  });
};

eventController.deleteEvent = (req, res, next) => {
  const { username, event } = req.params;
  // "id" needs to be changed to current event _id
  let queryString = `
  DELETE FROM 
  events 
  WHERE 
  events._id = $1
  `;

  let params = [event];

  db.query(queryString, params, (err, response) => {
    if (err) {
    //  console.log('error in deleting an event', err);
      return next(err);
    }
    //console.log('successfully deleted event', response.rows);
    return next();
  });
};

eventController.addParticipants = (req, res, next) => {
  const { username } = req.params;
  const { guests } = req.body;

  let event;
  req.params.event ? (event = req.params.event) : (event = res.locals.eventID);

  if (guests) {
    const split = guests.split(',');

    split.forEach((participant) => {
      let queryString = `
      INSERT INTO 
      event_participants (user_username, event_id) 
      VALUES 
      ($1, $2)
      `;
      let params = [participant, event];

      db.query(queryString, params, (err, response) => {
        if (err) {
          return next(err);
        }
        //console.log('response adding participants', response.rows);
      });
    });
    return next();
  } else {
    return next();
  }
};

// controller to grab all participants for an event
eventController.getParticipants = (req, res, next) => {
  const { id, event } = req.params;
  // "1" needs to be changed to the specific event_id in event_participants table
  let queryString = `
  SELECT 
  users.name 
  FROM 
  users 
  INNER JOIN 
  event_participants ep 
  ON 
  ep.user_username = users.username 
  WHERE 
  ep.event_id = $1
  `;

  let params = [event];

  db.query(queryString, params, (err, response) => {
    if (err) {
      //console.log('error in getting participants for an event', err);
      return next(err);
    }
    res.locals.participants = response.rows;
    return next();
  });
};

module.exports = eventController;
