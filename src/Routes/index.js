const express = require('express')
const company = require('./company')
const engineer = require('./engineer')
const skill = require('./skill')
const showcase = require('./showcase')
const statusController = require('../Controllers/project')
const projectCompanyController = require('../Controllers/projectCompany')
const totalProjectController = require('../Controllers/checkTotalProject')

const forgotPass = require('../Controllers/user')

const auth = require('../Helpers/auth')

const Router = express.Router()

Router.get('/', (req, res) => {
  return res.send('Homepage')
})
Router.use('/company', company)
Router.use('/engineer', engineer)
Router.use('/skill', skill)
Router.use('/showcase', showcase)
Router.get('/engineer/status', auth.authentication, statusController.getStatus)
Router.get('/engineer/project', auth.authentication, statusController.getProject) 
Router.get('/engineer/totalProject/:id_engineer', auth.authentication, totalProjectController.checkTotalProject)
Router.patch('/engineer/status/:id', auth.authentication, statusController.updateStatus)   
Router.delete("/engineer/status/:id_project/:id_engineer", auth.authentication, statusController.deleteEngineer);

Router.get('/company/project', auth.authentication, projectCompanyController.getStatus)
Router.patch('/company/project/:id_project', auth.authentication, projectCompanyController.updateStatus)
Router.patch('/company/project2/:id_project', auth.authentication, projectCompanyController.updateStatus2)
Router.get('/company/getProject', auth.authentication, projectCompanyController.getProject)
Router.get('/company/getProject2', projectCompanyController.getProject2)
Router.patch('/company/updateProject', auth.authentication, projectCompanyController.updateProject)
Router.post('/company/insertProject', auth.authentication, projectCompanyController.insertRequest)
Router.post('/company/addProject', auth.authentication, projectCompanyController.insertProject)
Router.delete('/company/project/:id_project',auth.authentication, projectCompanyController.deleteProject)


Router.get('/engineerz/forgotpassword', forgotPass.forgotPassword)

module.exports = Router