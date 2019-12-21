const express = require('express')
const controller = require("../Controllers/showcase/showcase");

const Router = express.Router()

Router.get('/', controller.getShowcase)
Router.post('/', controller.addShowcase)
Router.patch('/:id', controller.patchShowcase)
Router.delete('/:id', controller.deleteShowcase)

module.exports = Router