const model = require('../Models/sortEngineer')
const form = require('../Helpers/form')

module.exports = {
  getSortEngineer: (req,res) => {
    const {query} = req
    model
      .getSortEngineer(query)
      .then(response => {
        // Resolve
        form.success(res,response)
      })
      .catch(err => {
        // Reject
        console.log(err)
      })
  }
}