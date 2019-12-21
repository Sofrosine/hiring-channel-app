const model = require('../Models/user')
const form = require('../Helpers/form')

module.exports = {
  getUser: (req,res) => {
    model
      .getUser()
      .then(response => {
        // Resolve
        form.success(res, response)
      })
      .catch(err => {
        // Reject
        console.log(err)
      })
  }
}
