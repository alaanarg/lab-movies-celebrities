// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Movie = require("../models/Movie.model");
const Celebrity = require("../models/Celebrity.model");

router.get("/", (req, res, next) => {
  Movie.find()
    .then((allMovies) => {
      res.render("movies/movies", { allMovies: allMovies });
    })
    .catch((error) => {
      console.log("Failure", error.message);
    });
});

router.get("/create", (req, res, next) => {
  Celebrity.find()
    .then((allCelebrities) => {
      res.render("movies/new-movie", { allCelebrities: allCelebrities });
    })
    .catch((error) => {
      console.log("Failure", error.message);
    });
});

router.post("/create", (req, res, next) => {
  console.log("About to create movie", req.body);
  //   res.render("index");
  Movie.create({
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
    cast: req.body.cast,
  })
    .then(() => {
      res.redirect("/movies");
    })
    .catch((error) => {
      console.log("Failed", error.message);
      res.render("movies/new-movie");
    });
});

module.exports = router;
