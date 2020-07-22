const express = require("express");
const userRouter = express.Router();
const verificationController = require("../controllers/verificationController");

userRouter.get("/", (req, res) => {
  return res.status(200).json("userRouter");
});

userRouter.post(
  "/signup",
  verificationController.createUser,
  //probably need to send to eventController to get all events BOTH
  (req, res) => {
    // will need to send res.locals info
    return res.status(404).json("working SON");
  }
);

userRouter.post(
  "/login",
  verificationController.verifyUser,
  //probably need to send to eventController to get all events BOTH
  (req, res) => {
    return res.status(404).json("worked");
  }
);

module.exports = userRouter;
