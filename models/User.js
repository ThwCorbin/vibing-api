const mongoose = require('../db/connection')


const Schema = mongoose.Schema

const userSchema = new Schema({
    username: String,
    email: String,
    password: String
})

User = mongoose.model("User", userSchema)

module.exports = User