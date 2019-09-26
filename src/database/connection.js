const mongoose = require('mongoose');
require('dotenv').config({path: process.env.NODE_ENV == 'test' ? '.env.test' : '.env'});

module.exports = () => {
  mongoose.connect(`${process.env.DB_DRIVER}://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  }).catch(error => {
    console.log(error);
    process.exit(1);
  });
}