require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const router = require('./src/Routes/index')


const index = express();

index.use(logger('dev'));
index.use(helmet.xssFilter()); //cross server scripting
index.use(cors()); //manage cors, menentukan situs mana yang boleh akses, situs yang mana yang di blacklist
index.use(bodyParser.json());
index.use(bodyParser.urlencoded({ extended: true }));

index.use('/', router);

index.listen(5000, () => {
  console.log('Server is running')
})

module.exports = index