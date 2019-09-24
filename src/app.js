const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({path: process.env.NODE_ENV == 'test' ? '.env.test' : '.env'});

class AppController {
  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();

    console.log(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?authSource=${process.env.DB_NAME}&w=1`)

    mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, {
      user: process.env.DB_USER,
      pass: process.env.DB_PASS,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }).catch(error => {
      console.log(error);
    });
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require('./routes'));
  }
}

module.exports = new AppController().express;