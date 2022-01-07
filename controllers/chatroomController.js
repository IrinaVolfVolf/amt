const mongoose = require('mongoose')
const Chatroom = require('../models/Chatroom')

exports.createChatroom = async (req, res) => {
  const { nameOfChat, created_at } = req.body
  const nameRegex = /^[A-Za-z\s]+$/
  if (!nameRegex.test(nameOfChat)) throw "Chatroom name can contain only alphabets."
  const chatroomExists = await Chatroom.findOne({ nameOfChat })
  if (chatroomExists) throw 'Chatroom with that name aleady exists.'
  const chatroom = new Chatroom({
    nameOfChat,
    created_at
  })

  await chatroom.save()

  res.json({
    message: "Chatroom created!"
  })
}
