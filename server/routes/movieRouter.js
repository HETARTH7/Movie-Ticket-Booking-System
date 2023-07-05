const { GetMovies } = require("../controllers/movie");

const router = require("express").Router();

router.get("/", GetMovies);

module.exports = router;
