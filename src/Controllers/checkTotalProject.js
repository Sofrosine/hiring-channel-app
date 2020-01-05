const model = require('../Models/checkTotalProject')
const form = require('../Helpers/form')

module.exports = {
  checkTotalProject: (req, res) => {
    const {id_engineer} = req.params
    model
      .checkTotalProject(id_engineer)
      .then(response => {
        form.success(res, response)
      })
      .catch(err => {
        console.log(err)
      })
  }
}