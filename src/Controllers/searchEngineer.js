const model = require('../Models/searchEngineer')
const form = require('../Helpers/form')

module.exports = {
  getSearchEngineer: (req,res) => {
    const {query} = req
    model
      .getSearchEngineer(query)
      .then(response => {
        // Resolve
        console.log(response[1].Name)
        form.success(res,response)
      })
      .catch(err => {
        // Reject
        console.log(err)
      })
  }
}