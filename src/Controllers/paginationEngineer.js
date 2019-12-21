const model = require('../Models/paginationEngineer')
const form = require('../Helpers/form')

module.exports = {
  getPaginationEngineer: (req,res) => {
    const {query} = req
    model
      .getPaginationEngineer(query)
      .then(response => {
        // Resolve
        console.log(query)
        form.success(res,response)
      })
      .catch(err => {
        // Reject
        console.log(err)
      })
  }
}