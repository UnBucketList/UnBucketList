const express = require('express');
const userRouter = express.Router();
const verificationController = require('../controllers/verificationController');

userRouter.get('/', (req, res) => {
  return res.status(200).json("userRouter")
});

userRouter.post(
  '/login',
   verificationController.verifyUser,

  )


module.exports = userRouter;