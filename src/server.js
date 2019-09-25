const express = require('express');
const connection = require('./database/connection');

class Server {
  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();

    connection();
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require('./routes'));
  }
}

module.exports = new Server().express;
