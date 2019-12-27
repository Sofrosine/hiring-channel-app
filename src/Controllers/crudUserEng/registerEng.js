const model = require("../../Models/crudUserEng/registerEng");
const form = require("../../Helpers/form");
const modelCheck = require("../../Models/checkEmail/checkEmail");
const uuidv1 = require("uuid/v1");

const bcrypt = require("bcryptjs");

module.exports = {
  registerEng: (req, res) => {
    const { email} = req.body;
    let password = req.body.password;
    // let uniqueId = Math.floor(Math.random() * 10000) + 1
    let uniqueIdx = uuidv1().split('-')[0]
    let uniqueId = uniqueIdx.match(/\d+/g)[0] +1;
    console.log(uniqueId)
    // const password = bcrypt.hashSync(req.body.password)
    if (/.+@.+\..+/.test(email) !== false && email.length > 3) {
      if (
        /^[^A-Za-z0-9_]{1}[A-Z]{2}[0-9]{3}[a-z]{2}$/.test(password) !== false
      ) {
        password = bcrypt.hashSync(password);
        const data = {
          email,
          password,
          id_engineer: uniqueId
        };
        modelCheck
          .checkEmailEng(email)
          .then(result => {
            if (result.length === 0) {
              modelCheck
              .checkEmailCom(email).then(result2 => {
                if (result2.length === 0) {
                  model
                    .registerEng(data)
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
                      console.log(err)
                      res.status(400).json({
                        status: 400,
                        message: "id_engineer not matches or already used"
                      });
                    });
                } else {
                  res.status(400).json({
                    status: 400,
                    message: 'email already exists'
                  })
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
