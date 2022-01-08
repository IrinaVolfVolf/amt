const mongoose = require('mongoose')

const ChatRoomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Name of chatroom is requred!!!'
  },
  created_at: {
    type: Date,
    required: false,
    default: Date.now
  }
})

module.exports = mongoose.model('Chatroom', ChatRoomSchema)
