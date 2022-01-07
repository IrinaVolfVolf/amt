const mongoose = require('mongoose')

const User2Schema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Name of user is requred!!!'
  },
  email: {
    type: String,
    required: 'Email is requred!'
  },
  password: {
    type: String,
    required: 'Password is requred!!!'
  },
  created_at: {
    type: Date,
    required: false,
    default: Date.now }
})

module.exports = mongoose.model('User2', User2Schema)
