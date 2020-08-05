const mongoose = require('../db/connection')
const mongoose = require('../models/User')
const User = mongoose.model('User')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: String,
    email: String,
    password: String
})

User = mongoose.model("User", userSchema)

module.exports = User