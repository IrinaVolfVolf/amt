const  {Router} = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const {check, validatorResult} = require('express-validator')
const User = require('../models/user')
const router = Router()

// /api/auth/register
router.post(
    '/register',

    [
        check('email', 'Wrong email').isEmail(),
        check('password', 'Min password width 6 symbols')
            .isLength({ min: 6 })
    ],

    async (req, res) => {
    try {
        const errors = validatorResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Incorrect registration data'
            })
        }

        const {email, password} = req.body
        const candidate = await User.findOne({ email })
        console.log(candidate)
        if (candidate) {
            res.status(400).json({ message: 'This User already exist' })
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        const user = new User({ email, password: hashedPassword })

        await user.save()

        res.status(201).json({ message: 'User created' })

    } catch (e) {
        res.status(500).json({ message: 'Something ! is wrong' })
    }
})

// /api/auth/login
router.post(
    '/login',

    [
      check('email', 'Input correct email').normalizeEmail().isEmail(),
        check('password', 'Input password').exists()
    ],

    async (req, res) => {
    try {
        const errors = validatorResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(), message: 'Incorrect data, when login'
            })
        }

        const {email, password} = req.body

        const user = await User.findOne({ email })

        if (!user) {
            return res.status(400).json({ message: 'User not found' })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(400).json({ message: 'Incorrect password, try again' })
        }

        const token = jwt.sign (
            { userId: user.id },
            config.get('jwtSecret'),
            { expressIn: '1h' }

        )

        res.json({ token, userId: user.id })


    } catch (e) {
        res.status(500).json({message: 'Something is wrong with SignUp'})
    }
})

module.exports = router
