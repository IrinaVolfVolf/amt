const express = require('express')
const config = require('config')
/* const path = require('path') */
const mongoose = require('mongoose')
const User = require('./models/user')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/', async (req, res) => {
  const { email, password } = req.body
  const user = new User({ email, password })
  res.status(200).json('Сервер работает')
  user.save((error, user) => {
    if (error) {
      return console.error(error)
    }
  })
})

const PORT = config.get('port') || 5000

async function start () {
  try {
    await mongoose.connect(config.get('mongoUri'), function (err) {
      useNewUrlParser: true
      if (err) throw err
      console.log('Successfully connected')
      app.listen(PORT, () => console.log(`App has been started on server ${PORT}`))
    })
  } catch (e) {
    console.log('Error: ', e.message)
    process.exit(1)
  }
}

mongoose.connection.on("error", (err) => {
  console.log("Mongoose Connection Error: " + err.message);
})

mongoose.connection.once("open", () => {
  console.log('MongoDB Connected');
})

//  Bring in the productionErrors
app.use("/user", require('./routes/user2'))
app.use("/chatroom", require('./routes/Chatroom'))

// Setup Error Handlers
const errorHandlers = require("./handlers/errorHandlers")
app.use(errorHandlers.notFound)
app.use(errorHandlers.mongooseErrors)
if (process.env.ENV === "DEVELOPMENT"){
  app.use(errorHandlers.developmentErrors)
} else {
  app.use(errorHandlers.productionErrors)
}

//  Bring in the models
require('./models/user2')
require('./models/Chatroom')
require('./models/Messages')

module.exports = app

start()
