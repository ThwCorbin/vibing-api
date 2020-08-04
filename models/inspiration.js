const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const inspirationSchema = new Schema ({
    name : String,
    quote: String
})

House = mongoose.model("House", inspirationSchema)

module.exports = House