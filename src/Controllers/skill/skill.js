const model = require('../../Models/skill/skill')
const form = require('../../Helpers/form')

module.exports = {
  addSkill: (req,res) => {
    const { query } = req
    model
      .addSkill(query)
      .then(response => {
        // Resolve
        form.success(res, response)
      })
      .catch(err => {
        console.log(err)
      })
  },
  getSkill: (req,res) => {
    model
      .getSkill()
      .then(response => {
        // Resolve
        form.success(res,response)
      })
      .catch(err => {
        console.log(err)
      })
  },
  patchSkill: (req,res) => {
    const {query, params} = req

    model
      .patchSkill(query, params)
      .then(response => {
        // Resolve
        form.success(res,response)
      })
      .catch(err => {
        // Reject
        console.log(err)
      })
  },
  deleteSkill: (req, res) => {
    const {params} = req

    model
      .deleteSkill(params)
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