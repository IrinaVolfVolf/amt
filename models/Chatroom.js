const mongoose = require('mongoose')
const { Schema, model } = require('mongoose')

const ChatRoomSchema = new mongoose.Schema({
    name: {
      type: String,
      required: 'Name is requred!',
    },
})

module.exports = model('ChatRoom', ChatRoomSchema)
