const express = require('express');
const eventRouter = express.Router();

eventRouter.get('/', (req, res) => {
  return res.status(200).json("eventRouter")
});

module.exports = eventRouter;