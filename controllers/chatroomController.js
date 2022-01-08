const mongoose = require('mongoose')
const Chatroom = require('../models/Chatroom')

exports.createChatroom = async (req, res) => {
  // console.log(req.body);
  const { name, created_at } = req.body;
  const nameRegex = /^[A-Za-z\s]+$/
  if (!nameRegex.test(name)) throw "Chatroom name can contain only alphabets."
  const chatroomExists = await Chatroom.findOne({
    name,
  })
  // console.log(chatroomExists);
  if (chatroomExists) throw 'Chatroom with that name aleady exists.'
  const chatroom = new Chatroom({ name })
  // console.log(chatroom);
  await chatroom.save((error, user) => {
    if (error) {
      return console.error(error)
    }
  })

  res.json({
    message: "Chatroom [" + name + "] created!"
  })
}
