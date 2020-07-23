const express = require('express');
const eventRouter = express.Router();
const eventController = require('../controllers/eventController.js');

// COMPLETED
eventRouter.put(
  '/:username/:event',
  eventController.editEvent,
  eventController.addParticipants,
  // eventController.getUserEvents,
  eventController.getParticipatingEvents,
  (req, res) => {
    res.status(200).json({ events: res.locals.allEvents });
  }
);

// COMPLETED
eventRouter.delete(
  '/:username/:event',
  eventController.deleteFromEventParticipantsTable,
  eventController.deleteFromEventsTable,
  eventController.getParticipatingEvents,
  (req, res) => {
    res.status(200).json({ events: res.locals.allEvents });
  }
);

// COMPLETED
eventRouter.post(
  '/:username',
  eventController.addNewEvent,
  eventController.addCreatorToEvent,
  eventController.addParticipants,
  // eventController.getUserEvents,
  (req, res) => {
    res.status(200).json({ addedEvent: res.locals.addedEvent });
  }
);

// COMPLETED
eventRouter.get(
  '/:username/:event',
  eventController.getParticipants,
  (req, res) => {
    res.status(200).json({ participants: res.locals.participants });
  }
);

module.exports = eventRouter;
