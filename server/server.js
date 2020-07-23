const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();

const eventRouter = require('./routes/eventRouter');
const userRouter = require('./routes/userRouter');

const PORT = 3000;

// are these needed?  sean

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use('/event', eventRouter);
app.use('/user', userRouter);

app.use('/', (req, res) => {
  res.send('helloooo world');
});

// Catch-all route handler
app.use('*', (req, res) => {
  return res.sendStatus(404);
});

// Global error handeler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Error handler caught unkown middleware error',
    status: 500,
    message: { err: 'An error occured' },
  };

  const errorObj = Object.assign(defaultErr, err);
<<<<<<< HEAD
  console.log('THE ERROR, ', err);
=======
  console.log('THE ERROR IN GLOBAL ERROR HANDLER: ', err);
>>>>>>> master
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
