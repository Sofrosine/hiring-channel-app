const model = require("../../Models/crudUserEng/readDelUpEng");
const checkPassword = require('../../Models/checkPassword/checkPassword')
const form = require("../../Helpers/form");
const checkEmail = require('../../Models/checkEmail/checkEmail')
const bcryptjs = require('bcryptjs')

module.exports = {
  readEng: (req, res) => {
    model
      .readEng()
      .then(response => {
        // Resolve
        form.success(res, response);
      })
      .catch(err => {
        // Reject
        console.log(err)
      })
  },
  deleteEng: (req, res) => {
    const {params} = req
    model
      .deleteEng(params)
      .then(response => {
        // Resolve
        form.success(res, response)
      })
      .catch(err => {
        // Reject
        console.log(err)
      })
  },
  patchEngEmail: (req, res) => {
    const {query, params} = req
    
    checkEmail
      .checkEmailEng(query.email)
      .then(result => {
        console.log(result)
        if(result.length === 0) {
          checkEmail
            .checkEmailCom(query.email)
            .then(result2 => {
              if(result2.length === 0){
                model
                  .patchEngEmail(query, params)
                  .then(response => {
                    // Resolve
                    form.success(res, response)
                  })
                  .catch(err => {
                    // Reject
                    console.log(err)
                  })
              } else {
                res.status(400).json({
                  status:400,
                  message: `Email already exists on user_company`
                })
              }
            })
        } else {
          res.status(400).json({
            status:400,
            message: `Email already exists on user_engineer`
          })
        }
      })
  },
  patchEngPassword: (req, res) => {
    const { email, password } = req.body
    const {query, params} = req //query for inserting password, params for inserting id_engineer

    checkPassword
      .checkPasswordEng(email)
        .then(result => {
          const passwordHash = result[0].password

          if (bcryptjs.compareSync(password, passwordHash)) {
            if (
              /^[^A-Za-z0-9_]{1}[A-Z]{2}[0-9]{3}[a-z]{2}$/.test(query.password) !== false
            ) {
              model
                .patchEngPassword(bcryptjs.hashSync(query.password), params)
                .then(result2 => {
                  console.log(result2)
                })
                .catch(err => {
                  console.log(err)
                })

              res.json({
                status: 200,
                message: `Password Changed`,
                data: {
                  email,
                }
              })
            } else {
              res.json({
                status:200,
                message: `Password is not matches`
              })
            }
          } else {
            res.json({
              status: 400,
              message: `Wrong password`
            })
          }
        })
        .catch(err => {
          console.log(err)
          res.json({
            status:200,
            message: `Email or Password incorrect`
          })
        })
      }
  }
