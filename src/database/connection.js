const mongoose = require('mongoose');
require('dotenv').config({path: process.env.NODE_ENV == 'test' ? '.env.test' : '.env'});

module.exports = () => {
    mongoose.connect(`mongodb+srv://simpleApi:${process.env.DB_PASS}@cluster0-pskh8.mongodb.net/simpleApi?retryWrites=true&w=majority`, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    }).catch(error => {
      console.log(error);
    });
}