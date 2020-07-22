const bcrypt = require("bcrypt");

const db = require("./../db/db");

const verificationController = {};

verificationController.createUser = (req, res, next) => {
  console.log("made it to create user");
  let { name, email, username, password } = req.body;
  username = username.toLowerCase();
  let string = `
  INSERT INTO users (name, email, username, password)
  VALUES ($1, $2, $3, $4)
  `;

  bcrypt.hash(password, parseInt(process.env.SALT), function (err, hash) {
    if (err) {
      console.log("ERROR IN BCRYPT");
      return next(err);
    }
    const values = [name, email, username, hash];
    db.query(string, values)
      .then((result) => {
        res.locals.username = username;
        res.locals.name = name;
        return next();
      })
      .catch((err) => {
        console.log("error in dbquery");
        console.log(err);
        return next(err);
      });
  });
};

verificationController.verifyUser = (req, res, next) => {
  console.log("made it to verify user");
  console.log(req.body);
  let { username, password } = req.body;
  username = username.toLowerCase();
  const values = [username];
  let string = `
  SELECT name, username, password FROM users WHERE username=$1;
  `;
  db.query(string, values)
    .then((result) => {
      if (!result.rows.length) {
        return res.json("incorrect username or password");
      }
      bcrypt.compare(password, result.rows[0].password, function (
        err,
        pwMatch
      ) {
        if (err) {
          console.log("error in bcrypt compare");
          return next(err);
        }
        if (pwMatch) {
          res.locals.username = result.rows[0].username;
          res.locals.name = result.rows[0].name;
          return next();
        } else {
          return next({ log: "incorrect password" });
        }
      });
    })
    .catch((err) => {
      console.log("err in verifyUser", err);
      return next(err);
    });
};

module.exports = verificationController;
