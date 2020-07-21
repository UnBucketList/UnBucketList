const path = require("path");
const express = require('express');
const app = express();

const eventRouter = require('./routes/eventRouter');
const userRouter = require('./routes/userRouter');



const PORT = 3000;

// are these needed?  sean
app.use(express.json());
app.use(express.urlencoded({extended: true}))


app.use('/event', eventRouter);
app.use('/user', userRouter);

app.use('/', (req, res) => {
  res.send('hello world')
});



// Catch-all route handler
app.use('*', (req, res) => {
  return res.sendStatus(404);
})

// Global error handeler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Error handler caught unkown middleware error',
    status: 500,
    message: {err: 'An error occured'},
  };

  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})

