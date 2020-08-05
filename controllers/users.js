const express = require('express')
const router = express.Router()
const jwt = require('jwt-simple')
const passport = require('../config/passport')
const config = require('../config/config')
const mongoose = require('../models/User')
const User = mongoose.model('User')

router.post('/signup', (req, res) => {
    if (req.body.username && req.body.password) {
        let newUser = {
            username: req.body.username,
            password: req.body.password
        }
        User.findOne({ username: req.body.username })
            .then((user) => {
                if (!user) {
                    User.create(newUser)
                        .then(user => {
                            if (user) {
                                var payload = {
                                    id: newUser.id
                                }
                                var token = jwt.encode(payload, config.jwtSecret)
                                res.json({
                                    token: token
                                })
                            } else {
                                res.sendStatus(401)
                            }
                        })
                } else {
                    res.sendStatus(401)
                }
            })
    } else {
        res.sendStatus(401)
    }
})

router.post('/login', (req, res) => {
    if (req.body.username && req.body.password) {
        User.findOne({ user: req.body.username }).then(user => {
            if (user) {
                if (user.password === req.body.password) {
                    var payload = {
                        id: user.id
                    }
                    var token = jwt.encode(payload, config.jwtSecret)
                    res.json({
                        token: token
                    })
                } else {
                    res.sendStatus(401)
                }
            } else {
                res.sendStatus(401)
            }
        })
    } else {
        res.sendStatus(401)
    }
})

module.exports = router