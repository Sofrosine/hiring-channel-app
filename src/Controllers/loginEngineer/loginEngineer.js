const model = require("../../Models/loginEngineer/loginEngineer");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  loginEngineer: (req, res) => {
    const { email, password } = req.query;

    model
      .loginEngineer(email)
      .then(result => {
        const id_engineer = result[0].id_engineer;
        const passwordHash = result[0].password;

        if (bcryptjs.compareSync(password, passwordHash)) {
          const token = jwt.sign(
            { id_engineer: id_engineer },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "1h" }
          );

          res.json({
            status: 200,
            message: "login success",
            data: {
              id_engineer,
              email,
              token
            }
          });
        } else {
          res.json({
            status: 400,
            message: "Password is incorrect!"
          });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(400).json({
          status: 400,
          message: "Email or Password is incorrect!"
        });
      });
  }
};
