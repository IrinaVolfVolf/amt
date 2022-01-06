const mongoose = require('mongoose')
const User = require('../models/user2')
const sha256 = require('js-sha256')
const jwt = require('jwt-then')
const config = require('config')

exports.register = async (req, res) => {
  const { name, email, password, created_at } = req.body

  if (password.length < 6) throw "Password must be atlist 6 characters long"

  const userExist = await User.findOne({
    email
  })

  if (userExist) throw "User with same email already exist."

  const user = new User({ name, email, password: sha256(password), created_at })
  await user.save((error, user) => {
    if (error) {
      return console.error(error)
    }
  })
  res.json({
    message: "User [" + name + "] registered successfully."
  })
}

exports.login = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({
    email,
    password: sha256(password),
  })
  if (!user) throw "Email and Password did not match"

  const token = await jwt.sign({ id: user.id }, config.get('jwtSecret'))

  res.json({
    message: "User logged in successfully",
    token,
  })

}
