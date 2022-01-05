const express = require ('express')
const config = require('config')
/*const path = require('path')*/
const mongoose = require('mongoose')
const User = require('./models/user')

const app = express()

app.use(express.json())

app.post('/', async (req, res) => {
    const {email, password} = req.body
    let user = new User({email, password})
    res.status(200).json('Сервер работает')
    user.save((error, user) => {
        if (error) {
            return console.error(error);
        }
    })
})

const PORT = config.get('port') || 5000
async function start () {
    try {

        await mongoose.connect(config.get('mongoUri'), function (err) {
            useNewUrlParser: true
            if (err) throw err;
            console.log('Successfully connected');
            app.listen(PORT, () => console.log(`App has been started on server ${PORT}`))
        })
    } catch (e) {
        console.log('Error: ', e.message)
        process.exit(1)
    }
}

start()


