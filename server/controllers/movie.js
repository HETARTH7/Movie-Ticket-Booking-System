const Movie = require("../models/Movies");

const GetMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    return res.status(200).json(movies);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch movies" });
  }
};

module.exports = { GetMovies };
