const editShowcaseController = require("../Controllers/showcase/editShowcase");
const express = require('express')
const Router = express.Router()

Router.post("/", editShowcaseController.addShowcaseEng); //localhost:5000/engineer/addshowcaseeng
Router.get('/', editShowcaseController.getShowcase)
Router.patch('/:id', editShowcaseController.patchShowcase)
Router.delete('/:id', editShowcaseController.deleteShowcase)

module.exports = Router