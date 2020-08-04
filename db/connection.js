const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/vibes", { useNewUrlParser: true });

module.exports = mongoose;

