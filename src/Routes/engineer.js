require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const auth = require('../Helpers/auth')

const controller = require("../Controllers/engineer");

const filterController = require('../Controllers/filter')

const editSkill = require('./editSkill')
const editShowcase = require("./editShowcase");

const registerEngController = require('../Controllers/crudUserEng/registerEng')

const loginEngController = require('../Controllers/loginEngineer/loginEngineer')

const Router = express.Router();

Router.get("/", auth.authentication, controller.getAllEngineer); // localhost:5000/engineer/
Router.get('/profile', auth.authentication, controller.getProfile)
Router.post("/", auth.authentication ,controller.postEnginner); // localhost:5000/engineer/
Router.patch("/", auth.authentication, controller.patchEngineer); // localhost:5000/engineer/:id
Router.delete("/:id", controller.deleteEngineer); // localhost:5000/engineer/:id

Router.get('/filter', filterController.filter)

Router.use('/skill', editSkill)
Router.use('/showcase', editShowcase)

Router.post('/register', registerEngController.registerEng )
Router.get('/login', loginEngController.loginEngineer)




module.exports = Router;
