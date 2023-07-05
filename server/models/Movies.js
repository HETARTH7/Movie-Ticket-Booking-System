const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: String,
  days: String,
  theatre: String,
  showtimes: Date,
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
