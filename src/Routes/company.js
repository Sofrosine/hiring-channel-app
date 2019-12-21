require("dotenv").config();
const express = require("express");
const auth = require('../Helpers/auth')

const controller = require("../Controllers/company");
const registerController = require("../Controllers/crudUserComp/registerComp");
const loginController = require("../Controllers/loginCom/loginCom");

const Router = express.Router();

Router.get("/", auth.authentication, controller.getAllCompany); // localhost:5000/company/
Router.get('/profile', auth.authentication, controller.getProfile)
Router.post("/", auth.authentication, controller.postCompany); // localhost:5000/company/
Router.patch("/", auth.authentication, controller.patchCompany); // localhost:5000/company/:id
Router.delete("/:id", controller.deleteCompany); // localhost:5000/company/:id

Router.get("/login", loginController.loginCom); //localhost:5000/company/login
Router.post("/register", registerController.registerComp); // localhost:5000/company/register

// POST method for user included on register's endpoint

module.exports = Router;
