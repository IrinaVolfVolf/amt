const mongoose = require('mongoose')

const ChatRoomSchema = new mongoose.Schema({
  nameOfChat: {
    type: String,
    required: true,
    default: "NewChatRoomName"
  },
  created_at: {
    type: Date,
    required: false,
    default: Date.now
  }
})

module.exports = mongoose.model('Chatroom', ChatRoomSchema)
