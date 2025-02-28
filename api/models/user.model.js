const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  firstname: {
    type: String,
    required: true,
    unique: false,
    trim: true,
    minlength: 2
  },
  lastname: {
    type: String,
    required: true,
    unique: false,
    trim: true,
    minlength: 2
  },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
