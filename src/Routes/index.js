const express = require('express')
const company = require('./company')
const engineer = require('./engineer')
const skill = require('./skill')
const showcase = require('./showcase')
const statusController = require('../Controllers/project')
const projectCompanyController = require('../Controllers/projectCompany')

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
Router.patch('/engineer/status/:id', auth.authentication, statusController.updateStatus)   
Router.delete("/engineer/status/:id_engineer/:id", auth.authentication, statusController.deleteEngineer);  

Router.get('/company/project', auth.authentication, projectCompanyController.getStatus)
Router.patch('/company/project/:id_project', auth.authentication, projectCompanyController.updateStatus)
Router.get('/company/getProject', auth.authentication, projectCompanyController.getProject)
Router.patch('/company/updateProject', auth.authentication, projectCompanyController.updateProject)
Router.post('/company/insertProject', auth.authentication, projectCompanyController.insertRequest)
Router.post('/company/addProject', auth.authentication, projectCompanyController.insertProject)
   


module.exports = Router