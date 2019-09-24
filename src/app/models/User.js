const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phones: [{areaCode: Number, number: Number}],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

UserSchema.methods.checkPassword = function(password) {
  return bcrypt.compare(password, this.password);
};

UserSchema.methods.generateToken = function(password) {
  return jwt.sign({ id: this.id }, process.env.APP_KEY);
};


module.exports = new mongoose.model('User', UserSchema);