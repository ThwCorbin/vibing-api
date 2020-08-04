const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/houses", { useNewUrlParser: true });

module.exports = mongoose;
