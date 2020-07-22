const express = require('express');
const eventRouter = express.Router();
const eventController = require('../controllers/eventController.js');

// COMPLETED
eventRouter.put(
  '/:username/:event',
  eventController.editEvent,
  eventController.getUserEvents,
  (req, res) => {
    res.status(200).json({ events: res.locals.allEvents });
  }
);

// COMPLETED
eventRouter.delete(
  '/:username/:event',
  eventController.deleteEvent,
  eventController.getUserEvents,
  (req, res) => {
    res.status(200).json({ events: res.locals.allEvents });
  }
);

// COMPLETED
eventRouter.post(
  '/:username',
  eventController.addNewEvent,
  eventController.addCreatorToEvent,
  eventController.getUserEvents,
  (req, res) => {
    res.status(200).json({ events: res.locals.allEvents });
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

eventRouter.post(
  '/:username/:event',
  eventController.addParticipants,
  (req, res) => {
    res.status(200).json();
  }
);

module.exports = eventRouter;
