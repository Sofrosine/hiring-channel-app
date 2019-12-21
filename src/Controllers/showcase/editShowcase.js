const model = require('../../Models/showcase/editShowcase')
const form = require('../../Helpers/form')

module.exports = {
  addShowcaseEng: (req,res) => {
    const { id_engineer, id_showcase } = req.body
    const data = {
      id_engineer,
      id_showcase
    }
    model
      .addShowcaseEng(data)
      .then(response => {
        // Resolve
        const data = {
          id_engineer: id_engineer,
          id_showcase: id_showcase
        }
        form.success(res, data)
      })
      .catch(err => {
        // Reject
        console.log(err)
      })
  },
  getShowcase: (req, res) => {
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
    const { body, params } = req
    const data = {
      id_showcase: body.id_showcase
    }
    model
      .patchShowcase(data, params)
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
    const { params } = req
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