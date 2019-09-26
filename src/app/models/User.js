const mongoose = require('mongoose');
const uuid = require('uuid');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
    default: uuid.v4
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  token: {
    type: String,
    select: false
  },
  phones: [
    {
      _id: false,
      areaCode: {
        type: String,
        minlength: 2,
        maxlength: 2
      },
      number: {
        type: String,
        minlength: 8,
        maxlength: 9
      },
    }
  ],
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
}, { versionKey: false });

UserSchema.methods.checkPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

UserSchema.methods.generateToken = async function() {
  return this.token = await jwt.sign({
    sub: this.id,
    iss: process.env.APP_NAME,
    data: {
      id: this.id
    }
  }, 'gJ6JlxgWKj21swOsv7vm5Q', { expiresIn: 60 * 30 });
};

UserSchema.pre('save', async function(next) {
  
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 10);

  next();
});

UserSchema.set('toJSON', {
  transform: function(doc, ret) {
    delete ret['password'];
    delete ret['token'];

    return ret;
  }
})

module.exports = mongoose.model('User', UserSchema);