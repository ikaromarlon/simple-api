const mongoose = require('mongoose');
const uuid = require('uuid/v1');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => uuid(),
    alias: 'id'
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
  },
  phones: [
    {
      areaCode: {
        type: Number
      },
      number: {
        type: Number
      },
    }
  ],
  status: {
    type: Boolean
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

UserSchema.methods.checkPassword = function(password) {
  return bcrypt.compare(password, this.password);
};

UserSchema.methods.generateToken = function() {
  return this.token = jwt.sign({ id: this.id }, process.env.APP_KEY);
};

UserSchema.pre('save', async function(next) {
  
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 10);

  next();
});

UserSchema.set('toJSON', {
  transform: function(doc, ret) {
    delete ret['password'];

    return ret;
  }
})

module.exports = mongoose.model('User', UserSchema);