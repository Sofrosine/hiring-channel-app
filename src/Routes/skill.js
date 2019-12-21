const express = require('express')
const controller = require("../Controllers/skill/skill");

const Router = express.Router()

Router.post('/', controller.addSkill)
Router.get('/', controller.getSkill)
Router.patch('/:id', controller.patchSkill)
Router.delete('/:id', controller.deleteSkill)

module.exports = Router