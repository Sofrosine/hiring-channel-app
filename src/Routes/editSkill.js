const editSkillController = require("../Controllers/skill/editSkill");
const express = require('express')
const auth = require('../Helpers/auth')
const Router = express.Router()

Router.post("/", editSkillController.addSkillEng); //localhost:5000/engineer/addskilleng
Router.get("/", editSkillController.getSkill)
Router.patch('/:id',  editSkillController.patchSkill)
Router.delete('/:id_engineer/:id_skill', auth.authentication, editSkillController.deleteSkill)

module.exports = Router