const mongoose = require('mongoose')
const {Schema, model, Types} = require('mongoose')

const schema = new mongoose.Schema({
    email: String,
    password: String
})

module.exports = model('User', schema)