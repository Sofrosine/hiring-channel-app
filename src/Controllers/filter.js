const model = require('../Models/filter')
const form = require('../Helpers/form')


module.exports = {
  filter: (req,res) => {
    const {name, skill, limit, page, sort_by, order} = req.body
    name
    let data = {
      name,
      skill,
      limit,
      page,
      sort_by,
      order
    }

    model
      .filter(data)
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