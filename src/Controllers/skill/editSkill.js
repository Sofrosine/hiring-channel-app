const model = require('../../Models/skill/editSkill')
const form = require('../../Helpers/form')

module.exports = {
  addSkillEng: (req, res) => {
    const {id_engineer, id_skill} = req.body
    const data = {
      id_engineer,
      id_skill
    }
    model
      .addSkillEng(data)
      .then(response => {
        // Resolve
        const data = {
          id_engineer: id_engineer,
          id_skill: id_skill
        }
        form.success(res,data)
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
        form.success(res, response)
      })
      .catch(err => {
        // Reject
        console.log(err)
      })
  },
  patchSkill: (req, res) => {
    const {body, params} = req
    const data = {
      id_skill: body.id_skill
    }
    model
      .patchSkill(data, params)
      .then(response => {
        // Resolve
        form.success(res, response)
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