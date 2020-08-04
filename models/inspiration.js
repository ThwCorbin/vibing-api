const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const inspirationSchema = new Schema ({
    name : String,
    quote: String
})

Inspiration = mongoose.model("Inspiration", inspirationSchema)

module.exports = Inspiration