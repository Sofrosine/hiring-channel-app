const model = require('../../Models/showcase/showcase')
const form = require('../../Helpers/form')

module.exports = {
  addShowcase: (req,res) => {
    const {query} = req
    model
      .addShowcase(query)
      .then( response => {
        // Response
        form.success(res, response)
      }
      )
      .catch( err => {
        // Reject
        console.log(err)
      }
      )
  },
  getShowcase: (req,res) => {
    model
      .getShowcase()
      .then(response => {
        // Resolve
        form.success(res, response)
      })
      .catch(err => {
        // Reject
        console.log(err)
      })
  },
  patchShowcase: (req, res) => {
    const {query, params} = req
    model
      .patchShowcase(query, params)
      .then(response => {
        // Resolve
        form.success(res, response)
      })
      .catch(err => {
        // Reject
        console.log(err)
      })
  },
  deleteShowcase: (req, res) => {
    const {params} = req
    model
      .deleteShowcase(params)
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