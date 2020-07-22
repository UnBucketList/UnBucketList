const express = require('express');
const eventRouter = express.Router();
const eventController = require('../controllers/eventController.js');

// COMPLETED
eventRouter.put(
  '/:id/:event',
  eventController.editEvent,
  eventController.getUserEvents,
  (req, res) => {
    res.status(200).json(res.locals.allEvents);
  }
);

// COMPLETED
eventRouter.delete(
  '/:id/:event',
  eventController.deleteEvent,
  eventController.getUserEvents,
  (req, res) => {
    res.status(200).json(res.locals.allEvents);
  }
);

// COMPLETED
eventRouter.post(
  '/:id',
  eventController.addNewEvent,
  eventController.addCreatorToEvent,
  eventController.getUserEvents,
  (req, res) => {
    res.status(200).json(res.locals.allEvents);
  }
);

// COMPLETED
eventRouter.get('/:id/:event', eventController.getParticipants, (req, res) => {
  res.status(200).json(res.locals.participants);
});

module.exports = eventRouter;
