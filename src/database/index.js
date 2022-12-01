let mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/pets");
mongoose.Promise = global.Promise;

module.exports = mongoose;