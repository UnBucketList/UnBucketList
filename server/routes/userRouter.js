const express = require('express');
const userRouter = express.Router();
const verificationController = require('../controllers/verificationController');

userRouter.get('/', (req, res) => {
  return res.status(200).json("userRouter")
});

userRouter.post(
  '/signup',
   verificationController.createUser,
   //probably need to send to eventController to get all events
   (req, res) => {
     console.log('yay it worked')
     return res.status(404).json('working SON');
   }

  )


module.exports = userRouter;