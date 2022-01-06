const mongoose = require("mongoose")
const { Schema, model } = require('mongoose')

const MessagesSchema = new mongoose.Schema({
  chatroom: {
    type: mongoose.Schema.Types.ObjectID,
    required: 'Chatroom is requred!',
    ref: 'ChatRoomSchema'
  },
  user: {
    type: mongoose.Schema.Types.ObjectID,
    required: 'Chatroom is requred!',
    ref: 'User2Schema'
  },
  message: {
    type: String,
    required: 'Message is requred!',
    ref: 'User2Schema'
  }
})

module.exports = model('Messages', MessagesSchema)
