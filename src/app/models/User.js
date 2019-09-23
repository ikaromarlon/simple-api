var mongoose = require('mongoose');

module.exports = mongoose.model('User', new mongoose.Schema({
  id: String,
  name: String,
  email: String,
  password: String,
  phones: [{areaCode: Number, number: Number}],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
}));