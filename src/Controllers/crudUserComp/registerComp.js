const model = require("../../Models/crudUserComp/registerComp");
const modelCheck = require("../../Models/checkEmail/checkEmail");
const form = require("../../Helpers/form");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const SECRET_KEY = "secretkey23456";

module.exports = {
  registerComp: (req, res) => {
    const { email, id_company } = req.body;
    let password = req.body.password;
    let uniqueId = Math.floor(Math.random() * 10000) + 1
    // const password = bcrypt.hashSync(req.body.password)
    if (/.+@.+\..+/.test(email) !== false && email.length > 3) {
      if (
        /^[^A-Za-z0-9_]{1}[A-Z]{2}[0-9]{3}[a-z]{2}$/.test(password) !== false
      ) {
        password = bcrypt.hashSync(password);
        const data = {
          email,
          password,
          id_company: uniqueId
        };
        modelCheck
          .checkEmailCom(email)
          .then(result => {
            console.log(result);
            if (result.length === 0) {
              modelCheck.checkEmailEng(email).then(result2 => {
                if (result2.length === 0) {
                  model
                    .registerComp(data)
                    .then(response => {
                      const data = {
                        id: uniqueId,
                        email: email,
                        password: password
                      };
                      // Resolve
                      form.success(res, data);
                    })
                    .catch(err => {
                      // Reject
                      res.status(400).json({
                        status: 400,
                        message: "id_company not matches or already used"
                      });
                    });
                } else {
                  res.status(400).json({
                    status: 400,
                    message: `email already exists`
                  });
                }
              });
            } else {
              res.status(400).json({
                status: 400,
                message: `email already exists`
              });
            }
          })
          .catch(err => {
            res.status(400).json({
              status: 400,
              message: "error when get email from database"
            });
          });
      } else {
        res.send("Your password is not valid ");
      }
    } else {
      res.send("Your email is not valid");
    }
  }
};
