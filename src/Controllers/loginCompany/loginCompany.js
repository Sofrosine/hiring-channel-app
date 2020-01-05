require("dotenv").config();
const model = require("../../Models/loginCompany/loginCompany");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  loginCompany: (req, res) => {
    const { email, password } = req.query;
    console.log(email);
    model
      .loginCompany(email)
      .then(result => {
        console.log(result);
        const id_company = result[0].id_company;
        const passwordHash = result[0].password;

        if (bcryptjs.compareSync(password, passwordHash)) {
          const token = jwt.sign(
            { id_company: id_company },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "24h" }
          );

          res.json({
            status: 200,
            message: "login success",
            data: {
              id_company,
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
          message: "Email or password is incorrect!"
        });
      });
  }
};
