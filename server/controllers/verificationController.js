const bcrypt = require("bcrypt");

const db = require("./../db/db");

const verificationController = {};

verificationController.createUser = (req, res, next) => {
  console.log('made it to create user')
  const { name, email, username, password } = req.body;
  let string = `
  INSERT INTO users (name, email, username, password)
  VALUES ($1, $2, $3, $4)
  `;

  bcrypt.hash(password, parseInt(process.env.SALT), function(err, hash) {
    if (err){
      console.log('ERROR IN BCRYPT')
      return next(err);
    }
    const values = [name, email, username, hash];
    db.query(string, values)
      .then((query) => {
        return next();
      })
      .catch((err) => {
        console.log('error in dbquery')
        console.log(err);
        return next(err);
      });

  })
}
  
//res.locals.user_id


module.exports = verificationController;
